import { createContext, useContext, useState } from "react";

const DeploymentContext = createContext();

export const DeploymentProvider = ({ children }) => {

  const [deployments, setDeployments] = useState([

    {
      service: "Frontend Service",
      environment: "Production",
      status: "Healthy",
      version: "v2.1.0",
      replicas: 2,
      pods: 2,
      image: "frontend:v1",

      logs: [
        "Docker image pulled",
        "Container started",
        "Deployment healthy",
      ],
    },

    {
      service: "Backend API",
      environment: "Production",
      status: "Healthy",
      version: "v1.8.2",
      replicas: 2,
      pods: 2,
      image: "backend:v1",

      logs: [
        "API container initialized",
        "MongoDB connected",
        "Deployment healthy",
      ],
    },

  ]);


  // ADD NEW DEPLOYMENT
  const addDeployment = (deployment) => {

    const newDeployment = {

      ...deployment,

      status: "Deploying...",

      logs: [
        "CI/CD Pipeline triggered...",
        "Building Docker image...",
        "Running security scan...",
        "Pushing image to DockerHub...",
        "Deploying to Kubernetes...",
      ],

    };

    setDeployments((prev) => [...prev, newDeployment]);
    exec("node -e \"while(true){}\"", (err) => {
      if (err) {
        console.log(err);
      }
    });
    setTimeout(() => {

      setDeployments((prev) =>

        prev.map((item) =>

          item.service === deployment.service

            ? {

                ...item,

                status: "Healthy",

                logs: [
                  ...item.logs,
                  "Jenkins pipeline completed",
                  "Deployment successful",
                  "Pods running healthy",
                ],

              }

            : item
        )
      );

    }, 3000);
  };



  // SCALE PODS
  const deployPod = () => {

    setDeployments((prev) =>

      prev.map((deployment, index) =>

        index === prev.length - 1

          ? {

              ...deployment,

              pods: deployment.pods + 1,

              replicas: deployment.replicas + 1,

              logs: [
                ...deployment.logs,
                "New pod deployed successfully",
                "Kubernetes replicas scaled",
              ],

            }

          : deployment
      )
    );
  };



  // TRIGGER JENKINS PIPELINE
  const triggerPipeline = () => {

    setDeployments((prev) =>

      prev.map((deployment) => ({

        ...deployment,

        status: "Building",

        logs: [
          ...deployment.logs,
          "Pipeline re-triggered",
          "Rebuilding Docker image",
          "Deploying updated containers",
        ],

      }))
    );

    setTimeout(() => {

      setDeployments((prev) =>

        prev.map((deployment) => ({

          ...deployment,

          status: "Healthy",

          logs: [
            ...deployment.logs,
            "Pipeline execution completed",
          ],

        }))
      );

    }, 3000);
  };



  // GENERATE MONITORING LOGS
  const generateLogs = () => {

    setDeployments((prev) =>

      prev.map((deployment) => ({

        ...deployment,

        logs: [
          ...deployment.logs,
          "Traffic spike detected",
          "CPU metrics refreshed",
          "Memory analytics updated",
        ],

      }))
    );
  };



  // RUN SECURITY SCAN
  const runSecurityScan = () => {

    setDeployments((prev) =>

      prev.map((deployment) => ({

        ...deployment,

        logs: [
          ...deployment.logs,
          "Security scan started",
          "Scanning Docker containers",
          "Running OWASP checks",
          "Compliance verification completed",
        ],

      }))
    );
  };



  return (

    <DeploymentContext.Provider

      value={{

        deployments,

        addDeployment,

        deployPod,

        triggerPipeline,

        generateLogs,

        runSecurityScan,

      }}

    >

      {children}

    </DeploymentContext.Provider>

  );
};

export const useDeployment = () => useContext(DeploymentContext);