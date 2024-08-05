import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "Phase 1: College",
    description: `My path starts at The University of Maryland in 2015. I did my undergraduate degree in Chemistry. While in school I expanded my knowledge by participating as a research assistant in everything from NASA space research to neuroscience to entomology. I left my college experience excited to see what I could do and learn!`,
  },
  {
    label: "Phase 2: Early Career",
    description: `After finishing school, I got my first job as an ORISE research fellow at the FDA. I focuses on medical device research for leachables and extractables. When the COVID pandemic hit in 2020, my contract was not renewed and I started down a new path`,
  },
  {
    label: "Phase 3: The In Between",
    description: `Due to COVID, I needed to pivot my career for the moment and got into freelancing and retail. Throughout my college career I had been creating content for businesses and running a small Etsy shop. I took those passions and continued them alongside a position as an assistant manager for Red Barn Mercantile. Through this I fostered my management, web development, and social media skills. This sparked the opening of my own business and a move that took me down an even different career path.`,
  },
  {
    label: "Phase 4: Remote Work",
    description: `With the growth of my small business came a move to a new state that lead me back into the chemistry career as I looked for full time work still. I ended up becoming a Patent Classifier for Serco. This job entailed my looking at hundred of patents a week in the industrial chemistry technical center (my specialty being batteries and cleaning devices). The work was extremely detail oriented and had a great work life balance for me to pursue my passions as well. After a year, I decided to leave the small business and focus on growing my career more. Unfortunately, a year later the company lost some contracts resulting in a massive lay off`,
  },
  {
    label: "Phase 5: The Transition",
    description: `When I was laid off, I decided to take that time to reflect on what I wanted my career to be. I realized I needed to find a way to showcase all my skills to the best of my ability and find something that allowed my creativity to shine, my type-A bring to run, and my intelligence to be challenged. Through some research I ended up in an EdEx Full-Stack Coding bootcamp at Columbia University. Through that, I discovered my passion for technology, web development, data systems, and so much more. Coding has really opened up the world of intersection between all of my skills. As I continue to grow and foster them, I see how much more passionate I become about it. Now I want to do is learn more and keep making bigger and better things and I hope if you're reading this I can share some of that with you.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      id="career-timeline"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 400,
          p: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "background.default",
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>Thanks for reading - I appreciate your time</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
  );
}
