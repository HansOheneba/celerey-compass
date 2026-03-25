"use client";

import type { StepComponentProps } from "@/app/apply/ApplyForm";

function errorText(message?: string) {
  if (!message) return null;
  return <p className="mt-1 text-xs text-red-600">{message}</p>;
}

export default function Step7({
  register,
  errors,
  watch,
  setValue,
}: StepComponentProps) {
  const selectedDevices = watch("devices") ?? [];

  const toggleDevice = (device: string) => {
    const hasDevice = selectedDevices.includes(device);
    if (hasDevice) {
      setValue(
        "devices",
        selectedDevices.filter((item) => item !== device),
        { shouldValidate: true },
      );
      return;
    }

    setValue("devices", [...selectedDevices, device], { shouldValidate: true });
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold text-[#111827]">
        Technology and Access
      </h2>
      <p className="mt-2 text-sm text-[#6b7280]">
        This helps us tailor support for your setup.
      </p>

      <div className="mt-6 grid gap-5">
        <fieldset>
          <legend className="text-sm text-[#374151]">
            Devices you can access *
          </legend>
          <div className="mt-3 flex flex-wrap gap-3">
            {["Laptop", "Tablet", "Smartphone"].map((device) => {
              const checked = selectedDevices.includes(device);

              return (
                <label
                  key={device}
                  className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                    checked
                      ? "border-[#c9a84c] bg-[#c9a84c]/10"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleDevice(device)}
                    className="h-4 w-4 rounded border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                  />
                  {device}
                </label>
              );
            })}
          </div>
          {errorText(errors.devices?.message as string | undefined)}
        </fieldset>

        <fieldset>
          <legend className="text-sm text-[#374151]">
            Reliable internet access
          </legend>
          <div className="mt-3 flex flex-wrap gap-4">
            {["Yes", "Sometimes", "No"].map((value) => (
              <label
                key={value}
                className="inline-flex items-center gap-2 text-sm text-[#374151]"
              >
                <input
                  type="radio"
                  value={value}
                  {...register("internet_access")}
                  className="h-4 w-4 border-gray-300 text-[#c9a84c] focus:ring-[#c9a84c]"
                />
                {value}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </section>
  );
}
