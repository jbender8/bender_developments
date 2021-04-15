import './App.css';
import Typography from '@material-ui/core/Typography';
import React from "react";


class ResearchDS extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            classes: props.classes,
        };
    }
    render() {
        const { classes } = this.state;
        return (<main className={classes.content}>
            <div className="App">
                <header className="App-header">
                    <Typography variant='h2'>Distributed Systems (CSC435)</Typography>
                    <Typography variant='subtitle1'>DePaul University Winter Quarter 2021 | Additional edits made </Typography>
                    <Typography variant='subtitle1'>Document Page Count: 34</Typography>
                    <Typography variant='subtitle1'>Document Word Count: 8263</Typography>
                    <Typography variant='subtitle1'>Created on: Friday, January 15, 2021</Typography>
                    <Typography variant='subtitle1'>Finished on: Saturday, March 13, 2021 </Typography>
                </header>
                <body>
                    <div className="h2s">
                        <Typography variant='h4'>Overview</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            A distributed systems paper based off readings from Maarten van Steen and Andrew S. Tanenbaum’s Distributed Systems 
                            and James F. Kurose and Keith W. Ross’ Computer Networking A Top-Down Approach. Assignments from Winter Quarter 
                            2021 DePaul University from Professor Dr. Clark Elliott. Dives into concepts including, what is a distributed 
                            system, middleware, Security with public Keys and Secret Keys, Blockchain, Networking, Threads, Sockets, 
                            Severs, Clients and much more. The paper starts off with 20 main concepts learned from the class. Then 
                            goes into depth on the different chapters within the books. And wraps up with information about the 
                            assignments done in class including network labs and programing assignments.
                        </Typography>
                    </div>
                    <br/><br/><br/>
                    <div className="h2s">
                        <Typography variant='h4'>Table of Contents</Typography>
                    </div>
                    <div className="h3s">
                        <Typography variant='body1'><a href="#TwentyConcepts">Twenty Concepts</a></Typography>
                        <Typography variant='body1'><a href="#Readings">Readings</a></Typography>
                        <Typography variant='body1'><a href="#NetworkLabs">Network Labs</a></Typography>
                        <Typography variant='body1'><a href="#ProgrammingAssignments">Programming Assignments</a></Typography>
                        <Typography variant='body1'><a href="#Reference">Reference</a></Typography>
                    </div>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div className="h2s">
                        <Typography variant='h4' id="TwentyConcepts">Twenty Concepts</Typography>
                    </div>
                    <br/>
                    <div className="h3s">
                        <Typography variant='h5' id="DistributedSystem">1.	Distributed System</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>A Distributed System gives the illusion to 
                            its users that it is using a single coherent system. When in fact, 
                            there are multiple elements that are communicating across many types 
                            of machines. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>When it comes to distributed systems there are two 
                            noteworthy characteristics. One, a single coherent system, and two, multiple
                            computing elements, also known as a node. We are able to give off the illusion of a single 
                            system by having the node communicate through a distributed system.
                        </Typography>
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="Middleware">2.	Middleware</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>Middleware is a layer in distributed systems to separate computers 
                            and the applications. Middleware in distributed systems is comparable to operating system in a 
                            computer but, middleware is for the network. It allows two computers to show the same application 
                            and communicate both together and separately.  
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="SocketsServerSockets">3.	Sockets / ServerSockets</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>Both Socket and SeverSocket are classes that can be imported 
                            in java with java.net. We saw and used Socket and SeverSocket throughout every program this 
                            quarter. 
                        </Typography> 
                        <br/>       
                        <Typography variant='body1'> A socket is used in a sever-client application to allow at least
                            different processes to communicate. They can communicate with on the same computer or even 
                            different computers. It allows computers to transfer data between the sever and the client. 
                            A Socket is usually attached to a port number. 
                        </Typography> 
                        <br/>       
                        <Typography variant='body1'> A real-world example of a socket is texting a friend with you phone. 
                            You can send and receive message from your friend on your phone and vice versa for them on 
                            their phone. Each phone would be a socket.
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'> A ServerSocket takes in request sent over the network from the socket. 
                            It then can do something with that request. For example, it can accept the request, get the local
                            port, and get the inet address. 
                        </Typography> 
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="Transparency">4.	Transparency</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Transparent</b> – makes the distributed system invisible to users. Users cannot tell that 
                            resources are distributed among several computers. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            There are 7 different types of transparency in a distributed system: Access, Location, 
                            Relocation, Migration, Replication, Concurrency, and Failure Transparency. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            <b>Access Transparency</b> – Conceals how data or resources are accessed.  Machine architectures 
                            variances are hidden but are represented the same across different machines.
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'> 
                            <b>Location Transparency</b> – Conceals the physical location of resources in a distributed system. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'> 
                            <b>Relocation Transparency</b> – Conceals if a resource has been rearranged in the distributed system.
                            This is significant in cloud computing. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'> 
                            <b>Migration Transparency</b> – Conceals if a resource has traveled to a new location.
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            The main difference between relocation and migration is that migration is introduced by users. 
                            For example, when you call a friend in the car, as you are driving you are migrating however 
                            it is hidden to your friend who could also be migrating or just be sitting on their couch. 
                            Since you are moving you started the migration. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            <b>Replication Transparency</b> – Conceals the duplication of a resource. A resource is duplicated to 
                            allow for more obtainable resources and to improve performance. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            <b>Concurrency Transparency</b> – Conceals that a more than one user might be accessing the same resources. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            <b>Failure Transparency</b> – Conceals that part of the distributed system may have failed. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'> 
                            It is nearly impossible to have a fully transparent distributed system. There is always going
                             to be cases where revealing a transparency is better than hiding it. An example where 
                             transparency is broken is the find my friends feature in phones. Your location becomes 
                             accessible in this program. 
                        </Typography> 
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="SynchronousCommunicationAsynchronousCommunication">5.	Synchronous Communication vs Asynchronous Communication </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Synchronous Communication</b> – Many LANs are based on Synchronous Communication. Waits for a 
                            reply from the sever before the client can request again. The client will be blocked until 
                            a reply is sent back. 
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Asynchronous Communication </b>– does not block the client while waiting for a reply from the
                            server. The client continues to make requests while waiting for the sever to reply. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="ACID">6.	ACID</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            Transactions follow an all or nothing protocol. This means they follow all the commands or none of
                            them. This is part of the four properties that transactions stand by. These properties are known as 
                            ACID.
                        </Typography>  
                        <br/> 
                        <Typography variant='body1'>
                            ACID stands for <b>Atomic</b>, <b>Consistent</b>, <b>Isolated</b>, and <b>Durable</b>. Atomic refers to an indivisible 
                            transaction that is not noticeable or invisible to users. Consistent confirms that a transaction’s 
                            system invariants are not violated. Isolated confirms that there are no interferences with concurrent 
                            transactions. Durable confirms that changes are permanent after a transaction is committed. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="PublicKeysSecretPrivateKeys">7.	Public Keys vs Secret / Private Keys</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            Both Public keys and Private or Secret Keys are used to either encrypt or decrypt 
                            messages or documents. Both are Asymmetric keys as well. However, public keys are keys 
                            that are open to the public. Anyone can access them. And private or secret keys are someone’s 
                            personal key used to decrypt data on their personal devices. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            To send a message to a friend you would want to encrypt the message with your friend’s 
                            public key. Your friend then can decrypt the message with their secret key. In order to 
                            have a well encrypt key it should be fairly long. Having a longer password is always a 
                            good rule of thumb. For example, if your password is five unique words it could take upmost 
                            500 years for a hacker to crack your password.  
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="HeterogeneousSystems">8.	Migrating Code:  Heterogeneous Systems</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> There are three ways to manage migration when migrating the 
                            entire memory. First memory pages are moved to the new computer. Those that are later 
                            updated during the migration process are resent.  Second, the current virtual machine 
                            is stopped. Then we migrate memory and the new virtual machine is then started. Lastly,
                            we allow whenever needed, the new virtual machine to pull in new pages. For example, 
                            allowing processes to copy memory pages and begin right away on the new virtual machine.
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="ArchitecturalStyle">9.	Architectural Style</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> There are four different Architectural Styles: Layered, 
                            Object-based, Resource-centered, and event based. Architectural Styles are devised by 
                            components. It looks at how components are connected, how data between components is exchanged, 
                            and how a system is configured. The four different styles are sometimes combined. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="LANsWANs">10.	LANs vs WANs</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>LANs</b> – Stands for Local-area networks. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>WANs</b> – Stands for Wide-area networks.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            The key difference between LANs and WANs is LANs is computers all located in the same 
                            building or facility. Whereas WANs can be millions of computers across the globe. Data 
                            connected with LANs can move at a rate of billions of bits per second. In contrast WANs 
                            rate is a lot slower moving at about 10 thousand bits per second to about 100 million 
                            bits per second.
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="BitTorrent">11.	BitTorrent </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> A BitTorrent is a file downloading system that is largely 
                            peer-peer based.  A file can only be downloaded in BitTorrent if the downloading client 
                            is also delivering material to someone else. BitTorrent .torrent files are structured and 
                            centralized whereas regular nodes are unstructured and de-centralized. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="NetworkFileSystem">12.	Network File System </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> Client-server architectures are organize many distributed file 
                        systems. A lot of Operating systems use Network file system. Network file system offers a 
                        standard view of its local files, it does not take into account how the files were implemented 
                        it should be the same no matter what. It allows files on severs to be accessed by the client. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="RPCSteps">13.	RPC Steps</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            RPC steps (reworded from the text to my own words):
                        </Typography>
                        <ul>
                            <li>
                                In the traditional way, the client process calls the client stub.
                            </li>
                            <li>
                                The client stub creates a message and calls the operating system on the local machine.
                            </li>
                            <li>
                                The message is sent from the client's operating system to the remote operating system.
                            </li>
                            <li>
                                The message is sent to the server stub by the remote operating system.
                            </li>
                            <li>
                                The server stub requests the server and empties the parameters.
                            </li>
                            <li>
                                The stub receives the result after the server completes the task.
                            </li>
                            <li>
                                The server stub captures the result in a message and sends it to its local operating system.
                            </li>
                            <li>
                                The message is sent from the server's operating system to the client's operating system.
                            </li>
                            <li>
                                The message is sent to the client stub by the client's operating system.
                            </li>
                            <li>
                                The result is sent to the client after the stub unpacks it.
                            </li>
                        </ul>                    
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="Threads">14.	Threads  </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> A thread is similar to a process in the fact that 
                            it can execute its own code separately from the code of other threads. In contract to a 
                            process a thread has a degradation in performance. This is because it does not attempt 
                            to attain concurrency transparency of a high degree. Thus, a threat context contains only 
                            some thread management information and the processor context and nothing else. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="ThinClientNetworkComputing">15.	Thin-Client Network Computing </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> Computer displays are controlled by X commands. X Kernel executes
                            these commands over the network. Unfortunately, there are long latencies with this in 
                            WANs because applications cannot always separate user-interface commands from commands written 
                            to X. A lot of requests are sent to X Kernel causing latencies because it then waits for a reply 
                            before it moves on. To fix this issue we can re-engineer X protocol’s Implementation or remove X 
                            and let the application control its display. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="Typesofvirtualization">16.	Types of virtualization </Typography>
                    </div>
                    <div className="bodies"> 
                        <Typography variant='body1'> There are two different types of virtualization. One, the creation of 
                            a runtime framework that delivers an abstract instruction set for applications to execute. Also 
                            known as a process virtual machine. This can only be used as a single process. Two, building a 
                            device that is introduced as a layer that shields the original hardware while also having the 
                            entire instruction set as an interface. Also known as a Native Virtual Machine Monitor. This 
                            is placed right on top of the hardware. This system allows us to have multiple processes. 
                        </Typography>   
                        <br/>
                        <Typography variant='body1'> While knowing the types of Visualization is important in order 
                            to understand them better you need to know and understand the three different levels of 
                            interfaces. The first level is the instruction set architecture. The second layer is System 
                            calls. And lastly we have Library calls otherwise known as APIs. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="ServerClusters">17.	Server Clusters </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>Server Clusters are multiple computers connected to a network. 
                            Each computer has at least one sever running. There are two types of clusters: Local-Area 
                            clusters and Wide-Area clusters.
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Local-Area clusters </b> – Computers connected though LANs. These typically offer a high bandwidth 
                            and a low latency. The cluster is owned by one organization. It is arranged into three tiers: 
                            Logical switch, application servers, and database system.
                        </Typography>
                        <Typography variant='body1'>
                            <b>Wide-Area clusters </b> – Manges multiple data centers across the world. There can be multiple 
                            organization all using the same cluster. This can cause for a high latency. As cloud computing 
                            becomes more popular more companies are using Wide-Area clusters. Amazon and Google are two 
                            examples of cloud computing that use Wide-Area clusters.
                        </Typography>

                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="SevenOSILayers">18.	The Seven OSI Layers</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> There are seven levels in the OSI model that Each layer offers an 
                            interface and at least one communication to the layer above it. The very top layer is the 
                            Application layer, and the very last layer is the Physical layer, and there are five layers 
                            in between. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Listing from bottom to top (reworded from the text to my own words):  
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Physical layer: </b> Standardizes the way two computers are related as well 
                            as how 0s and 1s are represented.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Data link layer: </b> delivers tools for detecting and potentially correcting transmission 
                            errors, in addition to, protocols for keeping a sender and receiver on the same page.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Network layer: </b> Holds the Protocols for handling congestion and for sending and 
                            receiving messages over a computer network.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Transport layer: </b> Holds the protocols for direct support applications that aid data 
                            streaming in real time or set up dependable communication.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Session layer: </b> Supports multiple application sessions. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Presentation layer: </b> Recommends a way to represent or interpret data independently 
                            of its hosts that communicating applications operate on.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Application layer: </b> Includes every other protocols not listed in the other layers. 
                            For example: email, file-transfer and web access.
                        </Typography>
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="Work">19.	Work (From Blockchain)</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> Work is a rigorous puzzle used in Blockchain. It takes a sting 
                            at random and combines it to the existing data, hashes it, and the locates the special 
                            quality from the results. Work requires some guessing based on your data. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5' id="AgentMigration">20.	Agent Migration (From HostServer)</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>There are a few steps for Agent Migration that we followed when 
                            doing the HostServer program. We first started with a new location, or port that was selected 
                            by the agent. We then sent a hosting request and its status to the HostServer and got back a 
                            port where the new agent leister started. We then push the HTML form back to the client on the 
                            new port. Lastly, we kill the looper from the parent. 
                        </Typography>                         
                    </div>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div className="h2s">
                        <Typography variant='h4' id="Readings">Readings</Typography>
                    </div>
                    <div className="h3s">
                        <Typography variant='h5'>Distributed Systems</Typography>
                    </div>
                    <div className="h4s">
                        <Typography variant='h5'>Chapter One: Introduction</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            Before the invention of microprocessors and high-speed computer networks, computers operated 
                            separately and were rather expensive and quite massive compared to our modern-day computers. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Microprocessors </b> – Processes logic and control in a small number of circuits or even a single 
                            circuit. Another word for it could be a CPU. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Topology </b> – How computer networks are laid out. Explains how computers are connected to each 
                            other. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            Because of the invention of microprocessors and high-speed computer networks in the 1980s 
                            computers now have a distributed system.
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>1.1</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Distributed System </b> – Find out information <a href="#DistributedSystem">here</a>. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            Nodes are autonomous and act independently from each other thus having sperate disturbed 
                            systems. There are also various types of nodes. They can range from our desktop computers to 
                            our MacBook’s to as small as our Google Pixel’s. Nodes problematically run on their own time 
                            zones. This can mess with the nodes communication in a distributed system.
                        </Typography>       
                        <br/>
                        <Typography variant='body1'>
                            <b>Open Group </b> – nodes can freely communicate because they are openly allowed to join the 
                            distributed system. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Closed Group </b> – Invite only. Nodes are not able to freely enter or exit the distributed 
                            system. They are only allowed to talk to the other nodes in the system.  
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            Admission control is difficult because you need to verify the node, ensure it is a 
                            good node communicating with the correct group, and make sure there are no confidentiality 
                            issues between members and nonmembers. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Overlay Networks </b> – two types: Structured and Unstructured. Unstructured overlay is random 
                            whereas Structured overlay is organized in a logical ring or even a tree. However, both 
                            overlays are always allowing two nodes to communicate. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Peer-to-Peer Networks </b> – preforms a commonly known overlay class. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            A user should not be able to tell that their system is using the computer network to 
                            transfer data. This is because a single coherent system appears to the user that it is 
                            a single system. However, it does not actually achieve a single system, it just appears 
                            as it. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Distribution Transparency </b> – does not allow the user to see where data is being stored or 
                            if it is being used to provide a better user experience. This is because to the user the 
                            way data is being handled is not important for their experience. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Middleware </b> – Find out information <a href="#Middleware">here</a>.
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>RPC </b> – Stands for Remote Procedure Call. Is a service that appears as if a function that 
                            was executed by a remote computer was done on the user’s local computer. This is done 
                            though middleware.
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Atomic Transactions </b> – Provides an all or nothing concept. Either the middleware 
                            invokes all the services, or it invokes none of them. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Web Services / Mashups </b> – Many web services use parts of old code and mash them together 
                            to get the necessary product. With the use of middleware, web services are able to organize 
                            how their functions are generated to the users.
                        </Typography>                 
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>1.2</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            There are four goals to keep in mind when building a distributed system. A distributed system should have accessible resources, and not be noticeable that the resources are distributed over a network. Additionally, a distributed system should be open and scalable. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            Having a distributed system resources accessible allows for the distributed system to be more cost efficient. Communication between users also becomes easier in an accessible resourced distributed system. 
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            <b>Groupware</b> – A software that allows users to work together to edit and allows other remote communications
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            An example of an accessible resourced distributed system would be the internet. The internet allows us to easily share almost anything and is nearly accessible by everyone around the world. 
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            <b>BitTorrent </b>– A Peer-to-Peer network for file sharing. BitTorrent is another successful example of an accessible resourced distributed system. 
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            <b>Transparency </b>– Find out information <a href="#Transparency">here</a>.
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            <b>Uniform Resource Locator (URL) </b> – an address used by websites to point to the location of a file. 
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            URLs are a good example of Location Transparency. They use generic naming conventions and do not give away the location of the files within the name. URLs are also good examples for Relocation Transparency as for you cannot tell by the naming if the file has been relocated in its lifetime.
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            <b>Copy-Before-Use </b>– updating data in a new file version rather than over writing the previous version. 
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            <b>Open Distributed System </b>– other systems are easily able to use and integrate resources from other systems. 
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            <b>IDL – Interface Definition Language </b>– Defines an interfaces services by looking at the Syntax. 
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            <b>Interoperability </b>– specifies a common standard for two systems from two difference manufacturers so that they can co-aside together. 
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Portability </b>– Ensures that application can be executed on different systems and still look and feel the same with out needing to make any modifications to the program.
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            An extensible distributed system is one that can easily be modified to add, remove, or replace components in the system.
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            When looking at caching in web browsers you should look at the storage, exemption, sharing, and refreshing. Storage refers to the location which data to be cached is being stored. Exemption looks at what data can be deleted when the cache has no space left. It is important to remove dead or useless data to free up space for new data. Sharing determines if the cache data is public or private. Refreshing confirms that the cache data is current and relevant. 
                        </Typography>     
                        <br/>
                        <Typography variant='body1'>
                            With the invention of the cloud, it makes it easier for people to use a tablet as a computer rather than a PC. This is because distributed systems are salable. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Size Scalability </b>– there is no performance loss when we add users to the system.  
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Geographical Scalability </b>– Allows systems to be far apart but limits the noticeably to users that they are far away. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Administrative Scalability </b> – A system that runs several administrations but is still able to be managed. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Server</b> – Sends replies. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Synchronous Communication vs Asynchronous Communication </b>– Find out information <a href="#SynchronousCommunicationAsynchronousCommunication">here</a>.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Client</b> – Send requests.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Computational Grid</b> – A way to share equipment amongst other scientists. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Scaling Up</b> – Capacity improvement by generating more memory, updating computers and more. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Scaling Out</b>– Deploying more machines in attempt to expand the distributed system. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Partitioning and Distribution</b> – Another scaling technique that splits a component and spans the new smaller parts across the distributed system.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Replication</b> – Helps solve problems with scalability performance in a distributed system. Replicating elements across the distributed system allows for more availability and lessons the load between distributed systems. Thus, giving a better high performance distributed system.  
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Catching</b> – A form of replication that is made based off the client. Whereas replication is a decision made off the owner. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            Since there a several copies of resources from both replication and catching it is hard for the distributed system to maintain consistency among the systems. 
                        </Typography>  
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>1.3</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            There are three different types of distributed systems: distributed computing, distributed information, 
                            and distributed pervasive systems.  
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Distributed Computing </b>– Can be separated into two subgroups: Cluster Computing and Grid Computing.  
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Cluster Computing </b> – High-speed LANs that connect similar computers running on the same operating system.  
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Grid Computing </b>– A distributed system that might have different software, hardware or networks. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Cloud Computing </b>– Outsourcing grid computing.  
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>DSM system </b>– Stands for distributed shared-Memory Multicomputer. This would allow systems take the memory 
                            from anther computer and access it as if it was its own memory. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Single-System Image </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Virtual Organization </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Service-Oriented Architecture </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>OGSA- Open Grid Services Architecture </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Utility Computing </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Distributed Transaction </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Enterprise Application Integration- EAI </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Remote Procedure Calls- RPCs </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Transactional RPC </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>ACID </b>– Find out information <a href="#ACID">here</a>.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Nested Transaction </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>TP Monitor </b>– Stands for transaction processing monitor. Handled distributed transactions by having applications core be the server level. It allowed applications to access more than one server. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Remote Method Invocations - RMI </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Message-Oriented Middleware - MOM </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Publish/Subscribe </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Pervasive Systems </b>– blends into our current environment naturally. There is no clear difference with systems and users as for they a blended together.  
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Sensors </b>– Picks up various behaviors from the user.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Actuators </b>– Provides feedback and information to direct user’s behaviors.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Ubiquitous computing system </b>– Follows 5 requirements: distribution, interaction, context awareness, 
                            autonomy and intelligence. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Implicit Action </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Shared Data Spaces </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Universal Plug and Play Protocol- UPnP </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Disruption-Tolerant Networks </b>– It is not guaranteed that two nodes are connected. Communicating between 
                            two node may not be easy.  
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Pocket Switch Networks </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Abstract Regions </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>In-network Data Processing </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Synchronized Group </b>– 
                        </Typography>                       
                    </div>
                    <div className="h4s">
                        <Typography variant='h5'>Chapter Two: </Typography>
                        <br/>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Software Architectures </b> – inform us how different software mechanisms 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Work together and how they are arranged. 
                        </Typography>
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>2.1</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Architectural Style </b>– Find out information <a href="#ArchitecturalStyle">here</a>.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Component </b>– A modular device with precisely defined interfaces provided and required that can be replaced 
                            within its environment.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Connector </b>– Mechanism for mediating contact, communication, or collaboration between components
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Layered Fashion </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Downcall </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Upcall </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Handle</b> – An event is signaled by an operating system.  
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Transmission Control Protocol (TCP) </b>– 
                        </Typography>                       
                        <br/>
                        <Typography variant='body1'>
                            <b>Connection-oriented Service </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Object-Based Architectures </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Skeleton </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Encapsulation </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Service-Oriented Architectures </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Representational State Transfer (REST) – RESTful </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Architectures </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Simple Storage Service </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Uniform Resource Identifier (URI) </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>direct coordination </b>– 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>mailbox coordination </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>event-based coordination </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>tuples </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>event bus </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>based publish-subscribe systems </b>–
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            <b>Content-based publish-subscribe systems </b>–
                        </Typography>
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>2.2</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Wrapper</b> –
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>object adapter </b>–
                        </Typography>    
                        <br/>
                        <Typography variant='body1'>
                            <b>message broker </b>–
                        </Typography>    
                        <br/>
                        <Typography variant='body1'>
                            <b>interceptor </b>–
                        </Typography>    
                        <br/>
                        <Typography variant='body1'>
                            <b>request-level interceptor </b>-
                        </Typography>    
                        <br/>
                        <Typography variant='body1'>
                            <b>message-level interceptor </b>–
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>2.3</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>system architecture </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>request-reply behavior </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>idempotent </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>two-tiered architecture </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>three-tiered architecture </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>horizontal distribution </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>peer-to-peer systems </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>servant </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>distributed hash table </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>hypercube </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>random graph </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>time-to-live </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>random walk </b>–
                        </Typography>                       
                        <br/>
                        <Typography variant='body1'>
                            <b>policy-based search methods </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>content delivery network </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>broker </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>super peers </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>weak peer </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>leader-election problem </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>edge-server systems </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Internet Service Provider </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Fog Computing </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>BitTorrent </b>–Find out information <a href="#BitTorrent">here</a>.
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Free Riding </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>torrent file </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>magnet link </b>–
                        </Typography> 
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>2.4</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Network File System </b>–Find out information <a href="#NetworkFileSystem">here</a>.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>remote file service </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>remote access model </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>upload/download model </b>–
                        </Typography>                       
                        <br/>
                        <Typography variant='body1'>
                            <b>Virtual File System </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>NFS client </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>remote procedure calls – RPCs </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>NFS server </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Uniform Resource Locator - URL </b>– 
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Browser </b>– 
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>HyperText Transfer Protocol – HTTP </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>HyperText Markup Language – HTML </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Common Gateway Interface </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Server-side script </b>– 
                        </Typography>   
                    </div>
                    <div className="h4s">
                        <Typography variant='h5'>Chapter Three: </Typography>
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>3.1</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Threads </b>–Find out information <a href="#Threads">here</a>.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>virtual processors </b>– 
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>process table </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>processor context </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Context switching </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Thread implementation </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Many-to-one threading model </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>lightweight processes (LWP) </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Multithreaded clients </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>thread-level parallelism (TLP) </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Multithreaded servers </b>–
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>3.2</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Principle of virtualization </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Types of virtualization </b>–Find out information <a href="#Typesofvirtualization">here</a>.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Instruction set architecture (ISA) </b>–
                        </Typography>                       
                        <br/>
                        <Typography variant='body1'>
                            <b>application programming interface (API) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>process virtual machine </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>native virtual machine monitor </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>guest operating systems </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>hosted virtual machine monitor </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>host operating system </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Nonprivileged instructions </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Infrastructure-as-a-Service (IaaS) </b>– Basic infrastructure
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Platform-as-a-Service (PaaS) </b>– system-level services
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Software-as-a-Service (SaaS) </b>– containing actual applications
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Amazon Elastic Compute Cloud (EC2) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Amazon Machine Images (AMIs) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b> Network Address Translation (NAT) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Amazon’s Elastic Block Store (Amazon EBS) </b>–
                        </Typography>  
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>3.3</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Clients </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>X Window System </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Thin-client network computing </b>– Find out information <a href="#ThinClientNetworkComputing">here</a>.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Client-side software for distribution transparency </b>–
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>3.4</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Servers </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Superserver </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Daemon </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>session state and permanent state </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Object servers </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Apache Portable Runtime (APR) </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Server clusters </b>–Find out information <a href="#ServerClusters">here</a>.
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Local-area clusters </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>General organization </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Request dispatching </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Wide-area clusters </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Redirection Policy </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Domain Name System (DNS) </b>–
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            <b>Slice Creation Service (SCS) </b>–
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>3.5</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Reasons for migrating code </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Migration in heterogeneous systems </b>– Find out information <a href="#HeterogeneousSystems">here</a>.
                        </Typography>                       
                    </div>
                    <div className="h4s">
                        <Typography variant='h5'>Chapter Four: </Typography>
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>4.1</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Open Systems Interconnection Reference Model (ISO OSI) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Seven OSI Layers</b>: Find out information <a href="#SevenOSILayers">here</a>.
                        </Typography>    
                        <br/>
                        <Typography variant='body1'>
                            <b>Lower-level protocols </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Transport protocols </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Transmission Control Protocol (TCP) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Real-time Transport Protocol (RTP) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Higher-level protocols </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>File Transfer Protocol (FTP) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Middleware protocols </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Domain Name System (DNS) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Types of Communication </b>–
                        </Typography>                   
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>4.2</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Remote Procedure Call (RPC) </b>–
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Client stub </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Server stub </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>remote procedure call steps</b>: Find out information <a href="#RPCSteps">here</a>.
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Parameter Marshaling </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Remote Method Invocation (RMI) </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Variations on RPC </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Asynchronous RPC </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Multicast RPC </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>DCE </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            IDL compiler consists of three files:
                            <ul>
                                <li>
                                    A header file (e.g., interface.h, in C terms).
                                </li>
                                <li>
                                    The client stub.
                                </li>
                                <li>
                                    The server stub.
                                </li>
                            </ul>
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Binding a client to a server </b>–
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h5s">
                        <Typography variant='h6'>4.3</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Publish-subscribe pattern </b>– 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Pipeline pattern </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>The Message-Passing Interface (MPI) </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Message-queuing systems </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Message brokers </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Message transfer </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Message Queue Interface (MQI) </b>–
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Managing overlay networks </b>–
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h4s">
                        <Typography variant='h5'>Chapter Six: </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            <b>Process Synchronization </b>– Ensures that each process is complete before moving forward. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            <b>Data Synchronization </b>– Data is the same in two sets.
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            <b>Coordination </b>– controls the relationships and dependencies between activities in a distributed system.
                        </Typography>                       
                    </div>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div className="h2s">
                        <Typography variant='h4' id="NetworkLabs">Network Labs</Typography>
                    </div>
                    <br/>
                    <div className="h3s">
                        <Typography variant='h5'>Intro Lab</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            I ran into a little difficulty with the intro lab. The example shown in the pdf in figure 
                            4 was not what I was seeing on my screen. I have about 11 different capture interfaces that 
                            were available on my Wireshark. Whereas the example only had two capture interfaces. The 
                            example also said to select Gigabit Network Connection, and I did not have that option on my 
                            wireshark. Thus, It took me a little bit to figure out what one I needed to use for the intro 
                            lab and to follow the examples. I eventually found out it was Microsoft: Wi-fi that I wanted 
                            to use. I figured this out because it was the only one out of my eleven choices that outputted 
                            the intro-wireshark-file1.html.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            Another issue I ran into while doing the intro lab was again in figure 4. In figure 4 it 
                            showed a start button right next to the options. Mine did not have any start buttons at all. 
                            I was just randomly clicking and saw that I could just double click on the selection I wanted, 
                            and it ran.
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>IP Lab</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            For this lab I downloaded ping plotter to capture my pockets. I then recorded the pockets with 
                            Wireshark. I captured pockets from www.pingplotter.com on ping plotter. I captured 3 different 
                            packet sizes at 56, 2000, and 3500. I then analyzed all the information on Wireshark and ran 
                            though the questions in the lab. Showed me how ICMP Request has all different identifications 
                            and Time to Live, whereas the ICMP Time to Live all have the same identifications and Time to 
                            Live for the same sources. I found this interesting because I would have thought identifications 
                            should be different for all but it’s not the case for ICMP Time to Live.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            In the questions on the lab, they asked us to investigate the fragment offsets for the 3 
                            different pocket sizes. For my offset I noticed that for 56 the offset was 0 but for 2000 
                            and 3500 the offset was the pocket size -20. For the replies however, there was a new 
                            section for the 2000 and 3500 with the IPv4 fragments. Each fragment is divided up by 1480 
                            bytes and then the remainder. 
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>DNS Lab</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            For this lab I ran nslookup in my windows command prompt. I ran the code suggested in the 
                            lab as nslookup www.mit.edu I also ran nslookup www.studentaid.gov. In the example they 
                            showed the command had a server name. However, when I ran both of the commands my server 
                            name came up as unknow. Same thing happened when I ran the second command. However, when 
                            I ran the third command it gave me a server name but the DNS timed out. I decided I would 
                            continue with the lab and further investigate the issue later.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            I looked into trying to get the issue resolved however, I was not able to. I tried to edit 
                            my firewall but could not find a workaround. Thus. I continued with the rest of the lab 
                            hoping I could still complete it.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            I then used Wireshark to capture the DNS from the given website. I found out that my DNS 
                            pockets were being sent over UDP
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            I then used Wireshark to capture the DNS from the given website. I found out that my 
                            DNS pockets were being sent over UDP. I was able to use ipconfig to compare the 
                            results from that to Wireshark.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            The next part of the lab required to capture pockets with Wireshark and nslookup. At this 
                            point I stopped the lab because my nslookup was not working. I am going to see if I can 
                            get it to work on my mac or other windows. So after a few hours of trying I was not able to 
                            get the nslookup to work on any of the 4 computers in my home. Therefore, for this lab I 
                            downloaded the zip folder provided and looked at their data for the second half of this 
                            lab. I then went through the questions for each nslookup command and compared each data.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            I noticed while comparing results that the information in the ipconfig was all the same 
                            as the data captured in the Wireshark. I also tried this with our course website to see 
                            if the data was the same. I saw that it was almost the same. The only difference I noticed 
                            with this was the Time to Live was slightly lower in the ipcongig command than it was in 
                            the wireshark.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            For the second part of the lab, I observed that the command nslookup www.mit.edu the first 
                            query was PTR type, and the other two queries were Type A. The first ones name also had 
                            the source IP address in reverse. The second one had mit.edu.poly.edu in the name. Then, 
                            the last one had just mit.edu for the name. I also noticed that the third response had 
                            Additional records, Authoritative namesevers, Answers and Queries while the second 
                            response only had Authoritative namesevers, Answers and Queries, and the first response 
                            only had Answers and Queries.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            For the second nslookup command I noticed that the first and second response were 
                            like the first nslookup command. With the first response only having queries and answers, 
                            and the second one having queries, answers and Authoritative namesevers. But unlike the 
                            first command this ones third response had queries and answers and Additional records 
                            but does not have Authoritative namesevers. This one also had the first query type as 
                            PTR but the other two Types were NS. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            For the last command the first and third responses had all 4(Additional records, 
                            Authoritative namesevers, Answers and Queries) but the second one only had Queries 
                            and Authoritative namesevers. The types for this lookup, like the last two lookups 
                            have PTR as the first type and A as the second and third type.
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>HTTP Lab</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            For this lab I captured a http pocket in Wireshark with the given 1-line html document. 
                            This one already looked different then the other labs I have done because it only produced 
                            2 http pockets. All the other pockets I captured so had a lot more even with the filters 
                            on. I then ran thought the questions on the lab answering everything they asked. Then, 
                            I compared those answers with the raw data in the inspect on the html document. I found 
                            most the information was the same as the information in Wireshark. However, I did notice 
                            there were a few fields that were not in Wireshark. Cache-control, If-Modified since, if 
                            none match, and upgrade-insecure-requests were all listed in the raw data but not in the 
                            data in Wireshark.
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            I then ran the second html file and captured the pockets in Wireshark. This time I noticed 
                            that it had If-Modified since, if none match, Cache-control, and upgrade-insecure-requests 
                            listed in the Wireshark Get. As noted before those were not listed there in the first file. 
                            However, It did not give the line based text like the first file and third file did. I also 
                            noticed that the Status code and phrase for files one and three were the same but for this 
                            second file the status code and phrase were changed.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            I ran though and looked at the data for the fourth file as well. I noticed that it was 
                            similar to the second file. Lastly, I ran the fifth file twice. I ran it two times because 
                            The first time I did not read far enough in the lab to see they gave you a user name and 
                            password.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            As I was answering the questions, I got to one question that asked me according to the 
                            Wireshark when the file was last modified. The answer was very close to the time that I 
                            opened the document. As I continued the lab they explained why. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            I had to run the fifth file two times because the first time I did not read far enough in 
                            the lab to see they gave you a username and password. By running it incorrectly the first 
                            time, I was able to find some interesting information. The first one I ran gave back an 
                            unauthorized request and the second one gave back the expected result. This was an interesting 
                            comparison because unauthorized request I made gave back all HTTP protocols but when I 
                            entered the username and password it also returned an OCSP response. OCSP stands for 
                            Online Certificate Status Protocol. Within this I can see new data including the 
                            tbsResponce data, and signature algorithm to name a few.  Whereas in the unauthorized 
                            I can only see the Line-based text data with the unauthorized message the site gave me.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            For the successful file five I can also see a few new differences that are different 
                            from the first four files in the OCSP. I can see a date field. This field shows me the 
                            date and time that I entered the site and it also gives an expires date. I can also see 
                            the Last modified field like the last files in the HTTP. It has the same time and date 
                            as the first four files.
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>TCP Lab</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            For the TCP Lab I downloaded the given alice.txt file and then uploaded it to the gaia 
                             given. After uploading the file, I ran my Wireshark to capture TCP pockets. Then, I 
                             hit the upload button on the website to fully upload the alice.txt file. I was able to 
                             capture quite a few TCP pockets. When filtering buy TPC I was also able to see two HTTP 
                             pockets listed for the website I used. I ended up hiding those pockets so I could focus 
                             on just the TCP pockets.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            After looking at the data and answering some of the lab’s questions. I looked at the 
                            Round-Trip Time graph. For this graph I could only see one dot placed at approximately 
                            55.2 Round Trip Time (ms) and 0.279447 Time(s). I played around with the Stream number 
                            in the graph depending on what number the stream is on the dot changes. And for this 
                            particular graph it disappeared completely at 14.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            Looking at the next graph in the lab, Sequence Numbers (Stevens), I noticed right 
                            away mine was very different. They had a lot of dots in the graph that went from left 
                            to right upward. Whereas mine was a straight line on 0. I opened a few more of my pockets 
                            into the graph and noticed they all had straight lines or a single dot.
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>UDP Lab</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            This lab had me capture UDP pockets in Wireshark. Right off the bat this was different 
                            than the other labs so far. I was able to capture UPD pockets without doing anything at 
                            all, other than capturing pockets. I then answered the questions that were pervaded with 
                            the lab. Though the data that was given I was able to figure out the max number of bytes 
                            that my UDP pocket could hold and the max port number. I also looked for what the protocol 
                            number was for my UDP pockets, 17, and was able to highlight over that data and see that the 
                            hexadecimal was also highlighted, 0x11.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            I noticed when filtering by UDP that it also displayed a protocol called MDNS or Multicast 
                            Domain Name System. I found this interesting because it listed all the Google homes, Google 
                            home minis, Google chrome casts and the Google nest we have in our home. But we also have 
                            some Amazon Echo’s, Dots and Amazon fire sticks that were not picked up. Only google products 
                            were. I tried to google why this was the case. It was hard to find a solid answer. The only 
                            thing I found was that amazon products have a secret key that doesn’t allow them to be captured.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            This filter also showed a DHCP or Dynamic Host Configuration Protocol for discover, where 
                            I work. I thought it was cool to see on there because I am doing this assignment on my 
                            personal computer not work computer. But it is still able to capture that because both 
                            computers are on the same network.
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>SSL Lab</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            For this lab they had me go shopping! I went on to my favorite cheap clothing store, 
                            Shein and looked at some clothes and added them to my cart. But because I am broke, 
                            I did not purchase anything and stopped collecting pockets there. For some reason, my 
                            pockets did not capture and SSL though. So, I downloaded the sample file and tried to 
                            filter by SSL, and it would not let me. So, I did some googling and it allowed me to 
                            filter by TLS and it showed me SSLv3 protocols. This still did not have an SSL head; 
                            however, it did have TLS and after looking at the image in the lab and the data I had 
                            I saw they were same information.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            I looked at the data given in ClientHello SeverHello, changed Cipher Spec, Client Key 
                            Exchange, and Application Data and went through the lab questions that followed each 
                            section.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            After I answered the question based on the labs example, I went back to the pockets 
                            I captured and filtered them by the TLS. This time when I filtered it did not give 
                            an SSL, but it gave a TLSv1.2 and TLSv1.3. I looked thought the data on these fields 
                            as well and saw that all the headers under its TLS were the same as the examples. 
                            Thus, I ran though the lab questions again with my own pockets.
                        </Typography>                       
                    </div>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div className="h2s">
                        <Typography variant='h4' id="ProgrammingAssignments">Programming Assignments</Typography>
                    </div>
                    <br/>
                    <div className="h3s">
                        <Typography variant='h5'>InetServer</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            For this assignment I took the classes that were given and ran them on my terminal to see 
                            how to even run the java programs since it has been a while since I have run any java. 
                            I also wanted to use the given classes to see how the program was supposed to run before 
                            I coded it on my own. Then, I copied the code given into my own java files. As I wrote the 
                            code, I wrote extensive comments to help myself fully understand what was going on. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            There were a few new terminologies for me in the code. I did have to reference docs.oracle.com 
                            as for some of this code was new to me and I wanted to fully understand what I was trying to 
                            code. The first one I did not know was java.net import. I learned that .net imports apps used 
                            for computer networking. It allows us to use things like ServerSocket in our code. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Another term I was unfamiliar with was PrintStream. I found out that this allows us to write 
                            output data. PrintStream is a package in the java.io directory. It is the only output stream 
                            that does not throw ioexception. It also invokes a flush method automatically. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Socket and ServerSocket are other new terms for me in this class. However, when writing the 
                            code, I remembered seeing the terms in our class notes. I went back to my Chapter 3 notes 
                            and noted how the ServerSocket and Socket go hand and hand. I was then able to apply that 
                            knowledge to my code.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            There were also a few terminologies I have used before but did not fully 
                            understand. So, I used this assignment to my advantage to learn what that 
                            code was. The first one was import java.io. This allows us to use things in 
                            our code like ioexception and bufferedreader. This allows us to throw exceptions 
                            and allows us to read a user’s input and produce a specialized output for the user 
                            based off the input. 
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>JokeServer</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            I started out with my inet program and the given code in class. I had three java files: 
                            JokeServer, JokeClient, and JokeClientAdmin. I started with the main java file, JokeServer. 
                            This file used four classes: JokeServer, AdminWorker, AdminLooper, and Worker. The main 
                            class JokeServer, had two methods other than the main method. I used one method to list 
                            the jokes and the proverbs. I used a HashMap to map the JA JB.. or PC, PD.. to the jokes 
                            and proverbs. The main method then printed the start strings to the terminal and started 
                            the worker class. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            My worker class has three methods: run, printProverbs and printJokes. In the run method 
                            I checked to see if user wanted a joke or not. If it wants a joke, then it prints Looking 
                            up next Joke. If not, then it prints Looking up next proverb. And calls the appropriate
                            method printProverbs or printJokes. Both printProverbs and printJokes methods take a 
                            random number between 1 and 4 to select a joke or proverb at random. It also keeps an 
                            int array to see if the jokes or proverbs were used already or not. Then depending on 
                            the random number given I print the corresponding joke or preverb in the HashMap in the 
                            JokeServer.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            The next class AdminWorker, is called and started in JokeServer. This class starts the 
                            AdminWorker class on a new port. And the AdminWorker class reads in the choice from the 
                            admin and sets my checker to either true or false based on what the choice is. Then it 
                            prints to the terminal weather we are getting jokes or proverbs. And that wraps up the 
                            JokeServer java file. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            The next file I worked on was the JokeClient file. This file had one class with 3 methods: 
                            main, toText and getRemoteAddress. In the main method I get the users name and return it 
                            back in a string to the terminal or I see if the use wants to quit or if they did not 
                            enter anything then I ask them to give me their name again. Once I get a name, I ask the 
                            user to write in next to get their joke or quit to exit. I also call the getRemoteAddress 
                            method. In the getRemoteAddress I push up and pull down from the sever to get the next 
                            joke or prover. Then I print what I get from the sever. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            The last file is JokeClientAdmin. This file has one class with two methods: main and 
                            getRemoteAddress. In this main class ask the user if they want a joke or a proverb. 
                            Based on that answer I send it to the getRemoteAddress witch like the getRemoteAddress 
                            in the JokeClient file it pushes up and pulls down information from the sever. 
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>Mini Webserver </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            First, I ran the code in MyListener and MyTelnetClient to understand how the network 
                            communicates with my code. I then took the code from MyListener and made a new MiniWebserver 
                            file. From there I looked at every line of code to ensure I knew what the program was doing. 
                            I also added my answers to the required questions. Next, I ran the WebAdd html file and entered 
                            a name and two numbers. I noticed when I submitted the file my name and the two numbers I selected 
                            were displayed in the query where you would normally search things on google. I learned from my 
                            web application class that the url can contain a lot of useful information for websites. I knew 
                            then I could fetch the answers from the url and display them in the page’s html.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            http://localhost:2540/WebAdd.fake-cgi?person=YourName&num1=4&num2=5
                        </Typography>       
                        <br/>
                        <Typography variant='body1'>
                            First, I had to separate out the three different queries answers: Name, Num1, Num2. I took the 
                            BufferedReader variable in and read its contents. I printed that onto my html to check I was 
                            fetching the correct information. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            Next, I replaced all the & symbols with = symbols so the string would be easier for me to split. 
                            After splitting the string, I was able to isolate out the name and the first number, however, 
                            with the second number it had for example 5 HTTP following. Thus, the 5 was not isolated. 
                            I went back and also replaced the HTTP with an = so it could be isolated. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            After I had the name and the two numbers, I was able to add the two numbers together and was 
                            able to produce a string to send to the page. I sent Hello ___ the sum of ____ and ____ is ___.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            For the original turn in of this assignment I was not able to get to get to implementing a new 
                            copy of the input form.
                        </Typography>    

                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>Blockchain</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            The Blockchain assignment was the most challenging assignment of the quarter. I used the two 
                            programming assignments given in class to help me with the assignment. The first thing I 
                            did was build out the main class, Blockchain. In this class I made a few if statements to check 
                            what number was given in the args. If args was 0, 1 or 2 I assigned my ProcessID variable to 
                            0, 1 or 2 otherwise I assigned it to my default of 0. I then took the ProcessID to determine 
                            what ports and what input file to use. That brings me to my ports class. In this class I 
                            have three types of ports for keyPort, unverifiedPort and updatedPort each port takes its 
                            assigned number and adds the ProcessID. Then, I return each port.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            My next class, getBlocks, does not work exactly but my goal for this was to read in the input 
                            file and get the text. Then I wanted to assign the next to the correct information. For example, 
                            the first word was the first name, and the second word was the last name. However, I could not get 
                            it to read in the file correctly. But to assign the names correct I called my BlockRecord class and 
                            the specific methods to set each name or other information. All of the BlockRecord class either 
                            has methods to get or set different variables. I get this class from the given code in BlockJ.
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            My last class is threada, which also does not quite work but I gave it a try. This class runs 
                            and accepts the Socket/ServerSocket. Even though I was not able to complete this assignment 
                            I was able to learn a lot about blockchain and understand what was going on in the example codes. 
                            Maybe one day I will finish the assignment. 
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>HostServer</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            The HostServer assignment was fairly simple. I took the code that was given and made minor 
                            adjustments and made my own comments. The first thing I noticed that I wanted to change was 
                            the number of imports. I prefer to keep my code simple and do .* rather than importing each 
                            directory. Then, since the code was adjusted slightly, and I made numerous comments my self I 
                            added to the opening command. This program had a total of 4 classes: HostServer, AgentWorker, 
                            agentHolder, & AgentListener. To fully understand how the program worked I started with the main 
                            class HostServer. This class printed some basic statements on the terminal, kept a counter for the 
                            next port number and started AgentListener. The AgentListener had four methods: AgentListener, run, 
                            sendHTMLheader, and sendHTMLtoStream. Within the whole AgentListener class we are able to make the 
                            form that is displayed on localhost:4242. This class then calls the AgentWorker class and starts it. 
                            The AgentWorker class reads what was imputed from the form and decides what to do with it. This class 
                            makes a call to both the agentHolder, and AgentListener classes. Lastly, we have the agentHolder 
                            class that takes in a ServerSocket. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            Most of the code that was used in the program was similar to those of past programs. The only 
                            thing I was not too familiar with was StringBuilder. A StringBuilder is an editable string, 
                            or a sequence of chars that can be edited. It allows you to append new parts to the string. 
                            Then when you are done appending to the string you can print or return it as string by simply 
                            doing toString(). 
                        </Typography>                       
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>MyWebServer</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            For the MyWebServer project I took what I did in the Mini WebServer assignment and used that as 
                            my baseline. I made sure that it worked the same way with the new naming conventions. I had 
                            two classes the MyWebServer main class that printed the first two lines of the program to the 
                            terminal telling the user to go to http://localhost:2540, then it started my other class 
                            ListenWorker. In this class I had four methods. Run, add, File and directories. Run read in 
                            the files and directories and checked the MIME type. Depending on the MIME type it calls the 
                            other methods to see what to do with it. If it is a HTML or plain text it calls file to display 
                            it on the local host as html or plain text. If its / it is a new directory and calls the directories 
                            class to display the list of directories. If it is cig it calls add to add the user’s input. I was 
                            not able to get this part of the program working, however. I also had some troubles displaying all 
                            the files in my directory it for some reason would only display some of them. However, I was able 
                            to see the dog and cat files and open them on my local host and that worked correctly. 
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            One new thing I did use for the first time in this program was StringTokenizer. Upon research 
                            I found that it takes a string and breaks it down into tokens. It is very similar to the 
                            .split method in java. I like this better however, because you do not have to identity 
                            what to split by it does it for you by the spaces. For me, it seems simpler to use and I wish 
                            I had discovered it earlier. 
                        </Typography>              
                    </div>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div className="h2s">
                        <Typography variant='h4' id="Reference">Books Referenced</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            Maarten van Steen and Andrew S. Tanenbaum, Distributed Systems, Third Edition – Version 01 
                            (February 2017). Published by Maarten van Steen.
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            James F. Kurose and Keith W. Ross, Computer Networking A Top-Down Approach, Sixth Edition 
                            – International Edition (2013). Published by Pearson.
                        </Typography>              
                    </div>
                    <br/><br/><br/>
                    <div className="h2s">
                        <Typography variant='h4'>Websites Referenced</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            docs.oracle.com
                        </Typography>              
                    </div>
                    <br/><br/><br/>
                    <br/><br/><br/>
                    <br/><br/><br/>
                </body>                   
            </div> 
        </main>);
    }
}

export default function homepage(props) {
    return (<ResearchDS classes={props.classes} />);
}