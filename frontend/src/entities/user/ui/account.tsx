import { UiTextField } from "@/shared/ui/ui-text-field";

export default function AccountChanges() {
  return (
    <UiTextField
      label="Электронная почта"
      inputProps={{
        placeholder: "1234",
        className: "rounded-md",
        autoComplete: "none",
      }}
    />
  );
}
