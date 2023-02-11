# Microfrontends Dashboard

A microfrontends based architecture to build a dashboard of statistics that a container application decided when to show each application.

Each frontend application can run in isolation and inside the container.

All interaction between container and child apps are through generic javascript and doesn't depend on the framework that any of them run.

Frontends:
  - Container
  - Auth
  - Marketing
  - Dashboard

Technologies:
  - React
  - Vue
  - Webpack
  - Module Federation
