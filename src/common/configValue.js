const config = {
    colors: {
      primary: "#3498db",
      secondary: "#2ecc71",
      error: "#e74c3c",
      warning: "#f39c12",
      success: "#f20909",
      info: "#3498db",
      mauCam: '#ff0200',
      mauXanh: '#00ff00',
    },
    errors: {
      commandNotFound: "Error: Command not found.",
      invalidArguments: "Error: Invalid arguments provided.",
      unauthorizedAccess: "Error: Unauthorized access.",
      serverError: "Error: Internal server error.",
      timeout: "Error: Command timed out.",
      missingParameters: "Error: Missing required parameters."
    },
    sucess: {
      commandExecuted: "Command executed successfully.",
      loginSuccess: "Login successful.",
    },
    ApiURL: {
      baseUrl: "https://jsonplaceholder.typicode.com/v2"
    }
  };
  
  export default config;