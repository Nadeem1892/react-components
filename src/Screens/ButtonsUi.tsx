import { ATMButton } from "../components/buttons/ATMButton"




const ButtonsUi = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-black to-purple-800">
    {/* Filled Buttons Section */}
    <h2 className="mb-4 text-2xl font-semibold text-white">Filled Buttons</h2>
    <div className="flex items-center justify-center gap-4">
      <ATMButton
        variant="filled"
        color="primary"
        size="sm"
        children="Small"
        onClick={() => alert("Small button clicked!")}
      />
      <ATMButton
        variant="filled"
        color="secondary"
        size="md"
        children="Medium"
        onClick={() => alert("Medium button clicked!")}
      />
      <ATMButton
        variant="filled"
        color="success"
        size="lg"
        children="Success"
        onClick={() => alert("Success button clicked!")}
      />

      <ATMButton
        variant="filled"
        color="danger"
        size="lg"
        isLoading={true}
        children="Loading..."
        onClick={() => alert("Danger button clicked!")}
      />

      <ATMButton
        variant="filled"
        color="danger"
        size="lg"
        children="Danger"
        onClick={() => alert("Danger button clicked!")}
      />

      <ATMButton
        variant="filled"
        disabled
        color="danger"
        size="lg"
        children="Disabled"
        onClick={() => alert("Danger button clicked!")}
      />

      <ATMButton
        variant="filled"
        color="success"
        size="lg"
        children="Success"
        onClick={() => alert("Success button clicked!")}
      />

      <ATMButton
        variant="filled"
        color="secondary"
        size="md"
        children="Medium"
        onClick={() => alert("Medium button clicked!")}
      />

      <ATMButton
        variant="filled"
        color="primary"
        size="sm"
        children="Small"
        onClick={() => alert("Small button clicked!")}
      />
    </div>

    {/* Outline Buttons Section */}
    <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
      Outline Buttons
    </h2>
    <div className="flex items-center justify-center gap-4">
      <ATMButton
        variant="outline"
        color="primary"
        size="sm"
        children="Small"
        onClick={() => alert("Small Outline button clicked!")}
      />
      <ATMButton
        variant="outline"
        color="secondary"
        size="md"
        children="Medium"
        onClick={() => alert("Medium Outline button clicked!")}
      />
      <ATMButton
        variant="outline"
        color="success"
        size="lg"
        children="Success"
        onClick={() => alert("Success Outline button clicked!")}
      />

      <ATMButton
        variant="outline"
        color="danger"
        size="lg"
        isLoading={true}
        children="Loading..."
        onClick={() => alert("Danger Outline button clicked!")}
      />

      <ATMButton
        variant="outline"
        color="danger"
        size="lg"
        children="Danger"
        onClick={() => alert("Danger Outline button clicked!")}
      />
      <ATMButton
        variant="outline"
        color="danger"
        size="lg"
        disabled
        children="Disabled"
        onClick={() => alert("Danger Outline button clicked!")}
      />

      <ATMButton
        variant="outline"
        color="success"
        size="lg"
        children="Success"
        onClick={() => alert("Success Outline button clicked!")}
      />

      <ATMButton
        variant="outline"
        color="secondary"
        size="md"
        children="Medium"
        onClick={() => alert("Medium Outline button clicked!")}
      />

      <ATMButton
        variant="outline"
        color="primary"
        size="sm"
        children="Small"
        onClick={() => alert("Small Outline button clicked!")}
      />
    </div>
    {/* Link Buttons Section */}
    <h2 className="mt-8 mb-4 text-2xl font-semibold text-white">
      Link Buttons
    </h2>
    <div className="flex items-center justify-center gap-4">
      <ATMButton
        variant="link"
        color="primary"
        size="sm"
        children="Small"
        onClick={() => alert("Small Link button clicked!")}
      />
      <ATMButton
        variant="link"
        color="secondary"
        size="md"
        children="Medium"
        onClick={() => alert("Medium Link button clicked!")}
      />
      <ATMButton
        variant="link"
        color="success"
        size="lg"
        children="Success"
        onClick={() => alert("Success Link button clicked!")}
      />

      <ATMButton
        variant="link"
        color="danger"
        size="lg"
        isLoading={true}
        children="Loading..."
        onClick={() => alert("Danger Link button clicked!")}
      />
      <ATMButton
        variant="link"
        color="danger"
        size="lg"
        children="Danger"
        onClick={() => alert("Danger Link button clicked!")}
      />
      <ATMButton
        variant="link"
        color="danger"
        size="lg"
        disabled
        children="Disabled"
        onClick={() => alert("Danger Link button clicked!")}
      />

      <ATMButton
        variant="link"
        color="success"
        size="lg"
        children="Success"
        onClick={() => alert("Success Link button clicked!")}
      />

      <ATMButton
        variant="link"
        color="secondary"
        size="md"
        children="Medium"
        onClick={() => alert("Medium Link button clicked!")}
      />

      <ATMButton
        variant="link"
        color="primary"
        size="sm"
        children="Small"
        onClick={() => alert("Small Link button clicked!")}
      />
    </div>
  </div>
  )
}

export default ButtonsUi