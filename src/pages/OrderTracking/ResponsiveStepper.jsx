import { styled } from "@mui/material/styles";
import { Stepper, Step, StepLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const steps = ["Order Confirmed", "Shipped", "Out For Delivery", "Delivered"];

const CustomStepper = styled(Stepper)(({ isMobile }) => ({
  "--stepper-dot-size": "1.25rem",
  "--stepper-line-height": "0.45rem",
  "--stepper-spacing-unit": "0.5rem",
  "--stepper-primary-color": "#8CB89F",
  "--stepper-secondary-color": "#EAEAF0",
  "--stepper-text-color": "#455F76",
  "--stepper-inactive-dot-color": isMobile ? "#455F76" : "#BABABA",

  width: "100%",
  ...(isMobile && {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "1rem",
  }),

  "& .MuiStepConnector-line": {
    height: isMobile ? "100%" : "var(--stepper-line-height)",
    width: isMobile ? "var(--stepper-line-height)" : "auto",
    border: "none",
    backgroundColor: "var(--stepper-secondary-color)",
    zIndex: 0,
    marginTop: isMobile ? -14 : "calc(var(--stepper-dot-size) * 1.45)",
    position: isMobile ? "absolute" : "relative",
    left: isMobile
      ? "calc(var(--stepper-dot-size) / 2 - var(--stepper-line-height) / 2)"
      : "auto",
  },

  "& .MuiStepConnector-root": {
    flex: 1,
    padding: 0,
    marginLeft: isMobile ? 0 : "calc(var(--stepper-dot-size) * -2.5)",
    marginRight: isMobile ? 0 : "calc(var(--stepper-dot-size) * -2.35)",
    height: isMobile ? "2rem" : "auto",
    position: isMobile ? "relative" : "static",
  },

  "& .MuiStepConnector-active .MuiStepConnector-line": {
    backgroundColor: "var(--stepper-primary-color)",
  },

  "& .MuiStepConnector-completed .MuiStepConnector-line": {
    backgroundColor: "var(--stepper-primary-color)",
  },

  "& .MuiStep-root": {
    padding: 0,
    display: isMobile
      ? (index) => (index === 0 || index === steps.length - 1 ? "flex" : "none")
      : "flex",
  },

  "& .MuiStepLabel-root": {
    flexDirection: isMobile ? "row" : "column-reverse",
    alignItems: isMobile ? "flex-start" : "center",
    gap: isMobile ? "1rem" : 0,
  },

  "& .MuiStepLabel-iconContainer": {
    padding: 0,
    marginTop: isMobile ? 0 : "calc(var(--stepper-spacing-unit) * -1)",
    zIndex: 1,
  },

  "& .MuiStepLabel-label": {
    marginBottom: isMobile ? 0 : "calc(var(--stepper-spacing-unit) * 2)",
    fontSize: "0.875rem",
    color: "var(--stepper-text-color)",
    "&.Mui-active": {
      color: "var(--stepper-text-color)",
    },
    "&.Mui-completed": {
      color: "var(--stepper-text-color)",
    },
  },
}));

const StepDot = styled("div")(({ active, completed, isMobile }) => ({
  width: "var(--stepper-dot-size)",
  height: "var(--stepper-dot-size)",
  borderRadius: "50%",
  backgroundColor:
    active || completed
      ? "var(--stepper-primary-color)"
      : "var(--stepper-inactive-dot-color)",
  border: `2px solid ${
    active || completed
      ? "var(--stepper-primary-color)"
      : "var(--stepper-secondary-color)"
  }`,
}));

const ResponsiveStepper = ({
  steps,
  activeStep,
  primaryColor = "#8CB89F",
  secondaryColor = "#EAEAF0",
  dotSize = "1.25rem",
  lineHeight = "0.25rem",
  spacingUnit = "0.5rem",
  inactiveDotColor = "#BABABA",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const rootStyle = {
    "--stepper-primary-color": primaryColor,
    "--stepper-secondary-color": secondaryColor,
    "--stepper-dot-size": dotSize,
    "--stepper-line-height": lineHeight,
    "--stepper-spacing-unit": spacingUnit,
    "--stepper-text-color": isMobile ? "#2A2A2A" : "#6B7280",
    "--stepper-inactive-dot-color": isMobile ? "#455F76" : inactiveDotColor,
  };

  const StepIconComponent = ({ active, completed }) => {
    return (
      <StepDot active={active} completed={completed} isMobile={isMobile} />
    );
  };

  return (
    <div style={rootStyle}>
      <CustomStepper
        activeStep={activeStep}
        orientation={isMobile ? "vertical" : "horizontal"}
        isMobile={isMobile}
      >
        {steps.map((label, index) => (
          <Step
            key={label}
            style={{
              display:
                isMobile && index !== 0 && index !== steps.length - 1
                  ? "none"
                  : "flex",
            }}
          >
            <StepLabel StepIconComponent={StepIconComponent}>{label}</StepLabel>
          </Step>
        ))}
      </CustomStepper>
    </div>
  );
};

export default ResponsiveStepper;
