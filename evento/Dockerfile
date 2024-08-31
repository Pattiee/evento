#*************************BUILD STAGE*************************
# Use an official Maven image as the base image
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the pom.xml and the project files to the container
COPY . /app/
COPY src ./src

# Build the application using Maven
RUN mvn clean package -DskipTests


#***********************PACKAGE STAGE*************************
# Use an official OpenJDK image as the base image
FROM openjdk:17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built JAR file from the previous stage to the container
COPY --from=build /app/target/*.jar /app/app.jar

#Expose port
EXPOSE 8080

# Set the command to run the application
CMD ["java", "-jar", "app.jar"]