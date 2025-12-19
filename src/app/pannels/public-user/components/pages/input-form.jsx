"use client";
import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "../../../../../styles/inputForm.css";
import { useNavigate } from "react-router-dom";
// import "select2/dist/css/select2.min.css";
// import Select2 from "react-select2-wrapper";
import Select from "react-select";
import "./inputform.css";

const InputForm = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const API_TOKEN = process.env.REACT_APP_API_TOKEN;
  const navigate = useNavigate();

  const [productFunctions, setProductFunctions] = useState([]);
  const [applicationStageName, setApplicationStageName] = useState([]);
  const [chemicalName, setChemicalName] = useState([]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // Project & Fabric Details
      projectName: "",
      date: "",
      fabricType: "",
      gsm: "",
      quantity: "",
      pickup: "",

      // Chemical Usage Array with all chemical-related fields
      chemicals: [
        {
          chemicalId: "",
          chemicalName: "",
          casNo: "",
          applicationStageId: "",
          applicationStageName: "",
          fossilCarbon: "",
          dosage: "",
          activeFormulation: "",
          productFunction: "",
          bioPercent: "",
        },
      ],

      // Additives & Notes
      additives: "",
      carbonSource: "",
      notes: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "chemicals",
  });

  useEffect(() => {
    const fetchProductFunctions = async () => {
      try {
        const response = await fetch(base_url + "/api/product-functions", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        // Store the data in state
        setProductFunctions(responseData.data || []);
      } catch (error) {
        // console.error("Failed to fetch product functions:", error);
      }
    };

    const fetchStageName = async () => {
      try {
        const response = await fetch(base_url + "/api/categories", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        setApplicationStageName(responseData.data || []);
      } catch (error) {
        // console.error("Failed to fetch product functions:", error);
      }
    };

    const fetchChemicalName = async () => {
      try {
        const response = await fetch(base_url + "/api/chemicals", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        setChemicalName(responseData.data || []);
      } catch (error) {
        // console.error("Failed to fetch product functions:", error);
      }
    };

    fetchProductFunctions();
    fetchStageName();
    fetchChemicalName();
  }, []);

  const transformFormData = (formData) => {
    return {
      projectName: formData.projectName,
      date: formData.date,
      fabricType: formData.fabricType,
      fabricWeightGSM: formData.gsm ? parseInt(formData.gsm) : null,
      fabricQuantity: formData.quantity ? parseInt(formData.quantity) : null,
      pickupPercentage: formData.pickup
        ? parseFloat(formData.pickup).toFixed(4)
        : "100.0000",
      chemicalUsage: formData.chemicals.map((chemical) => ({
        chemicalId: chemical.chemicalId ? parseInt(chemical.chemicalId) : null,
        chemicalName: chemical.chemicalName,
        casNo: chemical.casNo,
        productFunction: chemical.productFunction || "",
        dosagePercentage: chemical.dosage ? parseFloat(chemical.dosage) : null,
        fossilCarbonPercentage: chemical.fossilCarbon
          ? parseInt(chemical.fossilCarbon)
          : 100,
        bioBasedCarbonPercentage: chemical.bioPercent
          ? parseInt(chemical.bioPercent)
          : 100,
        applicationStageId: chemical.applicationStageId
          ? parseInt(chemical.applicationStageId)
          : null,
        applicationStageName: chemical.applicationStageName,
        activePercentage: chemical.activeFormulation || "",
      })),
      additivesAndNotes: {
        additives: formData.additives || "",
        carbonSource: formData.carbonSource || "",
        notes: formData.notes || "",
      },
    };
  };

  const onSubmit = async (data) => {
    const token = localStorage.getItem("jwt");
    try {
      const transformedData = transformFormData(data);
      // console.log("first========", transformedData);

      const response = await fetch(base_url + "/api/fabric-co2e/calculate", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
          "x-user-token": token,
        },
        body: JSON.stringify(transformedData),
      });

      if (!response.ok) throw new Error("Something went wrong");
      const responseData = await response.json();
      // console.log("responseData==========" , responseData)
      alert("Form submitted successfully!");
      navigate("/input-form-output", { state: responseData });
    } catch (error) {
      console.error("Submit Error:", error.message);
      alert("Failed to submit form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="inputFormSec"
      method="post"
    >
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <p className="fs-3 fw-bolder">Project & Fabric Details</p>
        </div>
      </div>
      <div className="row">
        {/* Project & Fabric Details */}
        <div className="col-lg-4 col-md-4">
          <div className="form-group mb-3">
            <input
              type="text"
              {...register("projectName", { required: "Required" })}
              className="form-control"
              placeholder="Project Name"
            />
            {errors.projectName && (
              <p className="text-danger">{errors.projectName.message}</p>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="form-group mb-3">
            <input
              type="date"
              {...register("date", { required: "Required" })}
              className="form-control"
              placeholder="Date"
            />
            {errors.date && (
              <p className="text-danger">{errors.date.message}</p>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="form-group mb-3">
            <select
              {...register("fabricType", { required: "Required" })}
              className="form-control"
            >
              <option value="">Fabric Type</option>
              <option value="cotton">Cotton</option>
              <option value="polyester">Polyester</option>
              <option value="blended">Blended</option>
            </select>
            {errors.fabricType && (
              <p className="text-danger">{errors.fabricType.message}</p>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="form-group mb-3">
            <input
              type="number"
              {...register("gsm", { required: "Required" })}
              className="form-control"
              placeholder="Fabric Weight (GSM)"
            />
            {errors.gsm && <p className="text-danger">{errors.gsm.message}</p>}
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="form-group mb-3">
            <input
              type="number"
              {...register("quantity", { required: "Required" })}
              className="form-control"
              placeholder="Fabric Quantity (kg)"
            />
            {errors.quantity && (
              <p className="text-danger">{errors.quantity.message}</p>
            )}
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div className="form-group mb-3">
            <input
              type="number"
              step="0.01"
              // onInput={(e) => {
              //   // Limit to 2 decimal places
              //   if (e.target.value.includes(".")) {
              //     const parts = e.target.value.split(".");
              //     if (parts[1] && parts[1].length > 2) {
              //       e.target.value = parseFloat(e.target.value).toFixed(2);
              //     }
              //   }
              // }}
              {...register("pickup", { required: "Required" })}
              className="form-control"
              placeholder="Assumed Pickup per KG of Fabric (%)"
            />
            {errors.pickup && (
              <p className="text-danger">{errors.pickup.message}</p>
            )}
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-4 col-md-4">
            <p className="fs-3 fw-bolder">Chemical Usage</p>
          </div>
        </div>
        {/* Chemical Usage */}
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <div className="row mt-4">
              <div className="col-lg-4 col-md-4 d-none">
                <div className="form-group mb-3">
                  <input
                    type="number"
                    {...register(`chemicals.${index}.chemicalId`)}
                    className="form-control"
                    placeholder="Chemical ID"
                    readOnly
                  />
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  <select
                    {...register(`chemicals.${index}.chemicalName`, {
                      required: "Required",
                    })}
                    className="form-control"
                    onChange={(e) => {
                      const selectedName = e.target.value;
                      const selectedChemical = chemicalName.find(
                        (chem) => chem.Title === selectedName
                      );
                      setValue(
                        `chemicals.${index}.chemicalId`,
                        selectedChemical?.id || ""
                      );
                      setValue(
                        `chemicals.${index}.casNo`,
                        selectedChemical?.CAS_No || ""
                      );
                    }}
                  >
                    <option value="">Select Chemical Name</option>
                    {chemicalName.map((chem) => (
                      <option key={chem.id} value={chem.Title}>
                        {chem.Title}
                      </option>
                    ))}
                  </select>
                  {errors.chemicals?.[index]?.chemicalName && (
                    <p className="text-danger">
                      {errors.chemicals[index].chemicalName.message}
                    </p>
                  )}
                </div>
              </div> */}
              <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  {/*  <Select2
                    className="form-control chemicalSelect"
                    data={chemicalName.map((chem) => ({
                      id: chem.Title,
                      text: `${chem.Title}`,
                    }))}
                    value={watch(`chemicals.${index}.chemicalName`) || ""}
                    options={{
                      placeholder: "Select or type Chemical Name",
                      allowClear: true,
                      tags: true,
                      createTag: function (params) {
                        return {
                          id: params.term,
                          text: params.term,
                          newTag: true,
                        };
                      },
                    }}
                    onSelect={(e) => {
                      const selectedName = e.target.value;
                      const selectedChemical = chemicalName.find(
                        (chem) => chem.Title === selectedName
                      );

                      setValue(`chemicals.${index}.chemicalName`, selectedName);
                      setValue(
                        `chemicals.${index}.chemicalId`,
                        selectedChemical?.id || ""
                      );
                      setValue(
                        `chemicals.${index}.casNo`,
                        selectedChemical?.CAS_No || ""
                      );
                    }}
                    onChange={(e) => {
                      const typedName = e.target.value;

                      // Handle both selection and typing
                      if (typeof typedName === "string") {
                        const selectedChemical = chemicalName.find(
                          (chem) => chem.Title === typedName
                        );

                        setValue(`chemicals.${index}.chemicalName`, typedName);
                        setValue(
                          `chemicals.${index}.chemicalId`,
                          selectedChemical?.id || ""
                        );
                        setValue(
                          `chemicals.${index}.casNo`,
                          selectedChemical?.CAS_No || ""
                        );
                      }
                    }}
                  /> */}
                  <Select
                    classNamePrefix="react-select"
                    placeholder="Select or type Chemical Name"
                    isClearable
                    isSearchable
                    options={chemicalName.map((chem) => ({
                      value: chem.Title,
                      label: chem.Title,
                      meta: chem, // keep full object
                    }))}
                    value={
                      watch(`chemicals.${index}.chemicalName`)
                        ? {
                            value: watch(`chemicals.${index}.chemicalName`),
                            label: watch(`chemicals.${index}.chemicalName`),
                          }
                        : null
                    }
                    onChange={(selected) => {
                      if (!selected) {
                        setValue(`chemicals.${index}.chemicalName`, "");
                        setValue(`chemicals.${index}.chemicalId`, "");
                        setValue(`chemicals.${index}.casNo`, "");
                        return;
                      }

                      setValue(
                        `chemicals.${index}.chemicalName`,
                        selected.value
                      );
                      setValue(
                        `chemicals.${index}.chemicalId`,
                        selected.meta?.id || ""
                      );
                      setValue(
                        `chemicals.${index}.casNo`,
                        selected.meta?.CAS_No || ""
                      );
                    }}
                  />
                  {errors.chemicals?.[index]?.chemicalName && (
                    <p className="text-danger">
                      {errors.chemicals[index].chemicalName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    {...register(`chemicals.${index}.casNo`)}
                    className="form-control"
                    placeholder="CAS No."
                    readOnly
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  <input
                    type="number"
                    step="0.01"
                    {...register(`chemicals.${index}.fossilCarbon`, {
                      required: "Required",
                    })}
                    className="form-control"
                    placeholder="Fossil carbon (%)"
                  />
                  {errors.chemicals?.[index]?.fossilCarbon && (
                    <p className="text-danger">
                      {errors.chemicals[index].fossilCarbon.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  <input
                    type="number"
                    step="0.01"
                    {...register(`chemicals.${index}.dosage`, {
                      required: "Required",
                    })}
                    className="form-control"
                    placeholder="Dosage (%)"
                  />
                  {errors.chemicals?.[index]?.dosage && (
                    <p className="text-danger">
                      {errors.chemicals[index].dosage.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  <input
                    type="number"
                    step="0.01"
                    {...register(`chemicals.${index}.activeFormulation`, {
                      required: "Required",
                    })}
                    className="form-control"
                    placeholder="Active in formulation"
                  />
                  {errors.chemicals?.[index]?.activeFormulation && (
                    <p className="text-danger">
                      {errors.chemicals[index].activeFormulation.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  <select
                    {...register(`chemicals.${index}.productFunction`, {
                      required: "Required",
                    })}
                    className="form-control"
                  >
                    <option value="">Product Function</option>
                    {productFunctions.map((productFunction) => (
                      <option
                        key={productFunction.id}
                        value={productFunction.title}
                      >
                        {productFunction.title}
                      </option>
                    ))}
                  </select>
                  {errors.chemicals?.[index]?.productFunction && (
                    <p className="text-danger">
                      {errors.chemicals[index].productFunction.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  <input
                    type="number"
                    step="0.01"
                    {...register(`chemicals.${index}.bioPercent`)}
                    className="form-control"
                    placeholder="Bio-based %"
                  />
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="form-group mb-3">
                  <select
                    {...register(`chemicals.${index}.applicationStageName`)}
                    className="form-control"
                    onChange={(e) => {
                      const selectedName = e.target.value;
                      const selectedStage = applicationStageName.find(
                        (stage) => stage.name === selectedName
                      );
                      setValue(
                        `chemicals.${index}.applicationStageId`,
                        selectedStage?.id || ""
                      );
                      setValue(
                        `chemicals.${index}.applicationStageName`,
                        selectedName
                      );
                    }}
                  >
                    <option value="">Application Stage Name</option>
                    {applicationStageName.map((stage) => (
                      <option key={stage.id} value={stage.name}>
                        {stage.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-12 text-end">
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="btn btn-danger btn-sm mb-3"
                >
                  Remove Chemical
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}

        <div className="col-md-12 mb-3">
          <button
            type="button"
            onClick={() =>
              append({
                chemicalId: "",
                chemicalName: "",
                casNo: "",
                applicationStageId: "",
                applicationStageName: "",
                fossilCarbon: "",
                dosage: "",
                activeFormulation: "",
                productFunction: "",
                bioPercent: "",
              })
            }
            className="btn btn-link"
          >
            + Add Another Chemical
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-lg-4 col-md-4">
            <p className="fs-3 fw-bolder">Additives & Notes</p>
          </div>
        </div>
        {/* Additives & Notes */}
        <div className="col-lg-6 col-md-6">
          <div className="form-group mb-3">
            <input
              type="text"
              {...register("additives", { required: "Required" })}
              className="form-control"
              placeholder="Additives / Enzymes"
            />
            {errors.additives && (
              <p className="text-danger">{errors.additives.message}</p>
            )}
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="form-group mb-3">
            <select
              {...register("carbonSource", { required: "Required" })}
              className="form-control"
            >
              <option value="">Estimated Carbon Source</option>
              <option value="fossil">Fossil</option>
              <option value="bio">Bio</option>
              <option value="mixed">Mixed</option>
            </select>
            {errors.carbonSource && (
              <p className="text-danger">{errors.carbonSource.message}</p>
            )}
          </div>
        </div>

        <div className="col-lg-12">
          <div className="form-group mb-3">
            <textarea
              {...register("notes")}
              className="form-control"
              rows={3}
              placeholder="Additional Notes"
            ></textarea>
          </div>
        </div>

        <div className="col-md-12">
          <button type="submit" className="site-button">
            Submit Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
