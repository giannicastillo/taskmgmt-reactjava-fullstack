Web Services 
    - software system designed to support interoperable machine-to-machine interaction over a network.  
    3 keys: 
        1) Designed for machine-to-machine interation
        2) Should be interperable- not platform dependent 
        3) Should allow communication over a network 

Important how questions related to Web Services 
    How does data exchange between applications take place? 
        The webservice is connected to an application. 
        App sends a request/output and Web Service sends an output 

        THE INPUT of a service is called a REQUEST, the output of a service is called a RESPONSE

    How can we make web services platform independent? 
        We will call from the Java application (or .NET or PHP)

        WEB SERVICE SHOULD ALWAYS BE PLATFORM INDEPENDENT 

        XML - Xtensible mark-up language 
        <getTasksDetails>
            <id> Task1 <id>
        </getTasksDetails>

        JSON - JavaScript Object Notation

    How does the Application A know the format of Request and Response ?
        How does it know what request to send ? Where to send? What is the format of response? 
            Answer: Service Definition
                -Specifies structure of request! 
            

Key Terminology 
    Request and Response 
        REQUEST (REQ) = INPUT , RESPONSE (RES) = OUTPUT  || INPUT AND OUTPUT TO AND FROM A WEB SERVICE 
    Message Exchange Format
        Format of the request and the response 
        XML and JSON 
    Service Provider or Server
        App a wants to consume a service from the web service 
        Web service is the service provider
        *The one which POST the web service 
    Service Consumer or Client
        Applications (Java) are the consumers of the webService , Who is choosing the service ? 
    Service Definition 
        The contract between the service provider and the service consumer.  
    Transport
        Defines how a service is called 
        Determines if it is transported over http or MQ 
        Ex of popular formats HTTP and MQ

Intro to RESTful Web Services
    REST = REpresentational State Transfer
    
    The relationship in restful services is beween Browser and Server 
    URI = Uniform Resource Identifier 

    EXAMPLE
        -Create a User - POST/signin
        -Delete a User - GET/signin/ #
        -Get all Users- Get/signin
        -Get one Users- GET/ users/ # 


        Data Exchange Format
            - No restriction. JSON is popular 
        Transport
            - Only HTTP
        Service Definition 
            - No Standard. WADL/ Swagger/..

Initializing a RESTful Service Project with Spring Boot
    use start.spring.io to initalize project
    Generate a <Maven Project> with <Java> and Spring Boot 2.0.0 (Snapshot) 

    Project Metadata
        Group 
            com.castillo.rest.webservices
        Artifact 
            restful-web-services
        Dependencies 
            Web, DevTools, JPA, H2 then Generate Project 
            import maven project and move to appropriate file 
            




