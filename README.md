# TaskForge

A cloud-native microservices platform designed to demonstrate modern DevOps, Kubernetes, CI/CD, and observability practices through a scalable and fault-tolerant task management system.

## Overview

TaskForge is a distributed microservices-based application that showcases production-grade cloud-native architecture. The platform consists of independent services for authentication, task management, and notifications, deployed using Kubernetes and automated through CI/CD pipelines.

## Key Features

- Microservices-based architecture
- JWT Authentication & Authorization
- RESTful APIs
- Containerized deployment using Docker
- Kubernetes orchestration
- CI/CD automation with GitHub Actions
- Asynchronous communication using Redis
- Monitoring and observability
- Horizontal scalability
- Fault-tolerant service design

## Architecture

```text
                        +----------------+
                        |     Client     |
                        +-------+--------+
                                |
                                v
                    +---------------------+
                    |  NGINX Ingress      |
                    +----------+----------+
                               |
         +---------------------+---------------------+
         |                                           |
         v                                           v

 +---------------+                       +---------------+
 | Auth Service  |                       | Task Service  |
 +-------+-------+                       +-------+-------+
         |                                       |
         |                                       |
         +---------------+-----------------------+
                         |
                         v
                  +-------------+
                  | Redis Queue |
                  +------+------+
                         |
                         v
               +-------------------+
               | Notification      |
               | Service           |
               +-------------------+

                         |
                         v

                    +---------+
                    | MongoDB |
                    +---------+

-------------------------------------------------------

Monitoring & Observability

Prometheus → Metrics Collection
Grafana    → Dashboards & Visualization
Jaeger     → Distributed Tracing

CI/CD Pipeline

GitHub Actions → Build → Docker Image → Kubernetes Deployment
```

## Technology Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### DevOps & Cloud
- Docker
- Kubernetes
- GitHub Actions
- NGINX Ingress Controller

### Monitoring
- Prometheus
- Grafana
- Jaeger

### Messaging
- Redis

## Microservices

### Auth Service
Responsible for:
- User Registration
- User Authentication
- JWT Token Generation
- Authorization

### Task Service
Responsible for:
- Task Creation
- Task Updates
- Task Deletion
- Task Retrieval

### Notification Service
Responsible for:
- Background Processing
- Event Consumption
- Notification Handling

## Project Goals

- Demonstrate cloud-native architecture
- Implement Kubernetes-based deployments
- Automate software delivery with CI/CD
- Build scalable microservices
- Implement observability and monitoring
- Showcase DevOps best practices

## Repository Structure

```text
TaskForge/
│
├── services/
│   ├── auth-service/
│   ├── task-service/
│   └── notification-service/
│
├── k8s/
│   ├── deployments/
│   ├── services/
│   ├── ingress/
│   └── monitoring/
│
├── .github/
│   └── workflows/
│
├── docker-compose.yml
└── README.md
```

## Development Status

🚧 Currently Under Development

Planned Features:
- [ ] Auth Service
- [ ] Task Service
- [ ] Notification Service
- [ ] Dockerization
- [ ] Kubernetes Deployment
- [ ] Redis Integration
- [ ] GitHub Actions CI/CD
- [ ] Prometheus Monitoring
- [ ] Grafana Dashboards
- [ ] Jaeger Tracing
- [ ] Horizontal Pod Autoscaling

## Author

Nitesh
