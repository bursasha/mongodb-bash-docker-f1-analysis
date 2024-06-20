# **f1-2018-db MongoDB Replication & Sharding Project** 🏁

### **How To Start?** 🆙
```
./run.sh
docker exec -it mongos bash -c "mongosh --port 27017 --authenticationDatabase admin -u root -p root"
```

### **How To Query?** ⏩️
```
use f1-2018-db;
( if needs authentication: db.auth("root", "root"); )
... query ...
```

### **How To Use [Mongo-Express](http://localhost:20002)?** 📝
```
http://localhost:20002
username: basic
password: basic
```

### **How To Stop The System?** ⏸️
```
./stop.sh
```

### **Database Selection Rationale for F1 2018 Season Data Management Project** 🏎️
My project involves the management and analysis of data for the Formula 1 2018 season, and I foresee the following use cases and justification for selecting MongoDB as the database:

- I chose MongoDB due to its high scalability and flexibility, allowing for efficient handling of large volumes of diverse data such as race results, team information, and driver details. The ability to modify this information without strict data schemas is particularly advantageous for a project with heterogeneous and constantly changing data, as is often the case with statistical information on sporting events. 📈

- I opted not to select another NoSQL database, perhaps because I wished to practically explore MongoDB specifically, planning to further my experience with NoSQL databases, with MongoDB being the first on my practice list. It offers a broad set of features that are well-suited for various tasks. 🔄

- The use of MongoDB is advisable when horizontal scalability is needed to process a large volume of data with an inconsistent structure, where frequent updates and changes to the data are the norm. This is ideal for analytical and operational queries where response time is critically important. ⏱️

- However, the choice of MongoDB might not be prudent if complex transactional operations with multiple dependencies and data relationships are required, where traditional SQL databases might offer more robust and optimized solutions. This was the case in my project, but with enthusiasm, I delved into this system and implemented a variety of database queries. Additionally, if the project is extremely sensitive to real-time data consistency, alternatives might need to be considered. 🖥️

---

### **About MongoDB** 🌟
**MongoDB** is a document-oriented NoSQL database, which distinguishes it from other presented databases (Redis, Apache Cassandra, Neo4j).

- **Redis**: Unlike Redis, which is a key-value data store and is suitable for caching and rapid temporary storage, MongoDB is designed for more complex and flexible data structures.

- **Apache Cassandra**: A columnar database aimed at high availability and scalability, especially in distributed storage. MongoDB, on the other hand, is optimized for the flexibility of document structures and horizontal scaling.

- **Neo4j**: A graph database, specifically designed to work with graph structures and relationships between objects. Meanwhile, MongoDB is best suited for hierarchical or complexly structured documents.

- **Relational Databases**: In comparison with relational databases, MongoDB does not require a rigid table schema making it flexible for development and iteration.

- **Data Representation**: MongoDB uses BSON (binary JSON) to represent documents, while relational databases operate with tables, rows, and columns.

---

### **MongoDB Basic Principles** 📚
- MongoDB is a popular *NoSQL database* known for its document-oriented nature.

- It primarily uses a *distributed data model*. Depending on the deployment setup, both horizontal scaling (sharding) and vertical scaling are possible.

- *Sharding* is a core feature of MongoDB, allowing it to distribute data across multiple servers. This helps in ensuring high throughput and horizontal scalability.

- *Replication* is also natively supported in MongoDB, enhancing availability and redundancy. A group of MongoDB servers, known as a replica set, ensures data reliability and fault tolerance.

- While Redis is an in-memory key-value store, Apache Cassandra is a column-family store, and Neo4j is a graph database, MongoDB stands out with its *document data model*. This allows for flexible schema representation, especially beneficial for applications with evolving data structures.

- Unlike traditional relational databases that use tables, rows, and columns to represent data, MongoDB uses *collections and BSON (binary JSON) documents*, making data integration more straightforward for certain types of applications.

- This distinction in data representation and storage mechanisms, coupled with its scalability features, makes MongoDB a preferred choice for many large-scale applications and enterprises.

---

### **CAP Theorem and MongoDB** 🌐
MongoDB is designed with a focus on **Consistency** and **Partition Tolerance**, placing it on the CP side of the CAP theorem. This orientation is ideal for systems where data accuracy cannot be compromised.

1. **Consistency**: MongoDB prioritizes data consistency, ensuring that all nodes return the most recent write acknowledged when no network partition exists. It provides strong consistency by default if all write operations wait for a majority of replicas to acknowledge the write.
2. **Partition Tolerance**: MongoDB can maintain its operations across a distributed network, which means it can tolerate network partitions and continue to function, but it sacrifices some level of availability to preserve consistency.
3. **Availability**: While MongoDB offers high availability through replica sets, it opts to maintain consistency in the presence of a partition. This means that during a network partition, some parts of the system might become temporarily unavailable to ensure that no stale data is served.

For my solution, which involves processing and analyzing racing results, these guarantees are important as data integrity and freshness must be maintained for accurate aggregation and reporting. 

- **Data consistency** ensures that all database queries return the most recent records following a write operation, which is vital for statistical accuracy and results analysis. 
- **Partition tolerance** guarantees the system's operationality even with partial network failures, which is crucial for maintaining continuous operational activities of my solution.

---

### **Project Architecture Overview** 🔍
My project's architecture revolves around a single-shard MongoDB cluster designed for operational simplicity and built using `Docker Compose`. It provides a uniform development, testing, and production environment with a modular setup that facilitates both deployment and future scaling.

- **Router Query Server** 💠: A single `mongos` router serves as the query entry point, efficiently directing operations within the cluster.
- **Mongo-express GUI** 👩🏾‍💻: The inclusion of `mongo-express` offers a convenient web interface for database administration tasks.
- **Config Servers with Replication** ⚙️: Three config servers (`config-serverA/B/C`) are deployed as a replica set to manage cluster metadata and ensure consistent sharding.
- **Sharded Cluster and Node Utilization** 🔧: The cluster comprises a single shard (`shard1`), with three nodes ensuring data redundancy and system resilience.
- **Network Configuration** 📡: A `server-network` connects all components, allowing secure and isolated communication.
- **Automation** 🤖: An automated process handles the server initialization and setup, streamlining the overall deployment.

#### Deviation from Recommended Practices 🏗️:
While the conventional MongoDB sharded cluster might employ multiple shards, the current solution utilizes a single shard due to the project's data and workload requirements. This choice simplifies the architecture and is cost-effective while still allowing horizontal scaling should the need arise.

#### Cluster Configuration 🛠️:
A sharded cluster with a single shard and a set of three config servers is created, balancing the need for redundancy and data integrity with the simplicity of management. This configuration is optimal for the anticipated workload and provides a foundation for scaling out if the project's demands grow.

#### Node Utilization 💡:
The use of three nodes in both the config server replica set and the shard replica set provides data redundancy and failover capabilities. This approach ensures no single point of failure within the cluster, enhancing the reliability of the database system.

#### Replication Strategy 🔧:
Replication is employed within both the config server set and the shard to ensure high availability and data durability. This strategy guards against data loss and provides operational continuity in the event of a node failure.

#### Sharding Strategy 🖥:
The system currently utilizes a single shard but is sharding-ready to accommodate growth. One of the collections is sharded using a hash key, facilitating efficient data distribution and quick scaling to handle larger data sets and increased query demands.

#### Data Handling and Formats 📄:
The MongoDB cluster manages various data types, from nested objects to strings and numbers, typical for Formula One stats. All data is stored in BSON format for efficient processing, aligning with the needs of modern apps.

#### Data Structure Choices 🔗:
MongoDB's document-oriented schema is selected for its adaptability with the semi-structured nature of racing data. It simplifies data management by avoiding complex joins and accelerates read/write operations, catering well to the dynamic needs of sports analytics.

#### Data Volume Management 📈:
The system handles a single Formula One season's data, designed to scale up seamlessly for future seasons. The sharding ensures it can manage growing data without performance loss.

#### Data Sources and Ingestion 🌐:
Data is sourced from authoritative Formula One platforms, ensuring a rich dataset for analysis. The database is structured to easily integrate and manage this multifaceted information, providing an expansive analytical view of the racing domain.

---

### **Data Persistance** 🔐
Data persistence within the MongoDB database is ensured by leveraging Docker containerization technology with defined volumes in the Docker Compose configuration. This approach allows data to be retained independently of the container lifecycle, ensuring its preservation even after containers are stopped and removed. Data replication across nodes in replica sets, both in config servers and shard servers, further enhances fault tolerance, as data remains accessible on other nodes in the event of a node failure. This strategy is chosen to guarantee high availability and reliability of data, which is critically important for analytical systems dealing with significant datasets such as Formula One racing statistics.

---

### **MongoDB Security Measures** 🔑
To ensure the security of MongoDB, a range of methods can be employed:

- **Authentication and Authorization** 🔐: Implementing a robust authentication and access control policy for users and applications.
- **Data Encryption** 🛡️: Applying TLS/SSL encryption for data in transit and at-rest encryption to protect dormant data.
- **Audit and Monitoring** 🕵️: Configuring access auditing and activity monitoring to detect suspicious actions.
- **Backup and Recovery** 💾: Regularly creating backups and planning a recovery strategy to minimize data loss.
- **Network Security** 🚧: Setting up firewalls and network rules to limit access to the database.

In my project, security is a priority addressed through several methods. **Authentication** is enforced for database access, with credentials required to connect to the database and perform operations, ensuring that only authorized users can access the data. The use of **Docker containers** adds an additional layer of isolation, reducing the surface of attack compared to traditional deployments. **Network security** is managed by Docker's internal networking capabilities, which restrict unauthorized external connections. Additionally, data is replicated across **multiple nodes**, providing not just data redundancy but also minimizing risks associated with single points of failure.

---

### ✅ **Advantages and Disadvantages of Using MongoDB for my project** ❌
#### Advantages ✅:
- **Scalability** 📈: MongoDB is well-suited for managing large volumes of unstructured data, perfect for analyzing race, team, and driver data that can constantly expand and change throughout the season.
- **Schema Flexibility** 🔄: The unstructured data model of MongoDB allows for easy modifications to the data structure without the need for migrating the entire database, useful for updates to statistics and results.
- **Rapid Data Access** ⚡: For analytical queries, such as race results comparisons or driver performance analysis, MongoDB can provide quick query processing thanks to its indexing mechanisms.

#### Disadvantages ❌:
- **Transactional Reliability** 🪛: Compared to traditional relational databases, ensuring atomic transactions may be more challenging in MongoDB, which can be critical when processing and updating registration results.
- **Query Complexity** 🔍: Complex queries with multiple joins can be harder to implement and optimize compared to SQL databases, which may complicate intricate data analytics.
- **Resource Consumption** 💾: MongoDB may consume more system resources to maintain performance when handling large data volumes, potentially requiring more powerful hardware.

---

### **Sources Utilized in Project** 📊
- [Docker Documentation](https://docs.docker.com) 🐳: Assisted in containerizing the application, ensuring a consistent and isolated environment for development and deployment.
- [Essentially Sports](https://www.essentiallysports.com/f1-news-what-are-the-budgets-for-f1-teams-including-mercedes-red-bull-ferrari/) 💰: Offered insight into the financial aspects of F1 teams, including budgets, which aided in understanding the economic context of the sport.
- [F1Report](https://f1report.ru/gran-pri/2018/australia-albert-park.html) 📝: Gave detailed reports on individual Grand Prix events, contributing to the granularity of my data analysis.
- [MongoDB Documentation](https://www.mongodb.com/docs/) 📚: The official MongoDB documentation was an invaluable resource for understanding database operations, query optimization, schema design, 
sharding and replicating technologies, authentication security layer.
- [Official Formula 1 Website](https://www.formula1.com) 🏆: Served as the primary source for up-to-date and official announcements, race schedules, and results.
- [Scaler Topics on CAP Theorem & MongoDB](https://www.scaler.com/topics/cap-theorem-mongodb/#) 📐: Provided a deep dive into the CAP theorem as it applies to MongoDB, enhancing my understanding of database consistency and availability trade-offs.
- [StatsF1](https://www.statsf1.com/en/2018.aspx) 📈: A comprehensive database for historical Formula 1 data that provided detailed statistics on races, teams, and drivers for the 2018 season.
- [Wikipedia on 2018 Formula One World Championship](https://en.wikipedia.org/wiki/2018_Formula_One_World_Championship) 🌐: Offered a general overview and background information on the 2018 Formula One season.

🛠️ Each of these resources played a critical role in the successful completion of my project, providing a blend of technical guidance, historical data, and current perspectives on the dynamic world of Formula 1. 🏎️
