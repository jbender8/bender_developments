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
                        <Typography variant='h4'>Table of Contents</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>Twenty Concepts:.................................................. 2</Typography>
                        <Typography variant='body1'>Readings:.............................................................. 10</Typography>
                        <Typography variant='body1'>Network Labs:........................................................ 24</Typography>
                        <Typography variant='body1'>Programming Assignments:................................... 29</Typography>
                        <Typography variant='body1'>References:........................................................... 34</Typography>
                    </div>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div className="h2s">
                        <Typography variant='h4'>Twenty Concepts</Typography>
                    </div>
                    <br/>
                    <div className="h3s">
                        <Typography variant='h5'>1.	Distributed System</Typography>
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
                        <Typography variant='h5'>2.	Middleware</Typography>
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
                        <Typography variant='h5'>3.	Sockets / ServerSockets</Typography>
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
                        <Typography variant='h5'>4.	Transparency</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            Transparent – makes the distributed system invisible to users. Users cannot tell that 
                            resources are distributed among several computers. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            There are 7 different types of transparency in a distributed system: Access, Location, 
                            Relocation, Migration, Replication, Concurrency, and Failure Transparency. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            Access Transparency – Conceals how data or resources are accessed.  Machine architectures 
                            variances are hidden but are represented the same across different machines.
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'> 
                            Location Transparency – Conceals the physical location of resources in a distributed system. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'> 
                            Relocation Transparency – Conceals if a resource has been rearranged in the distributed system.
                             This is significant in cloud computing. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'> 
                            Migration Transparency – Conceals if a resource has traveled to a new location.
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
                            Replication Transparency – Conceals the duplication of a resource. A resource is duplicated to 
                            allow for more obtainable resources and to improve performance. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            Concurrency Transparency – Conceals that a more than one user might be accessing the same resources. 
                        </Typography> 
                        <br/> 
                        <Typography variant='body1'>
                            Failure Transparency – Conceals that part of the distributed system may have failed. 
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
                        <Typography variant='h5'>5.	Synchronous Communication vs Asynchronous Communication </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            Synchronous Communication – Many LANs are based on Synchronous Communication. Waits for a 
                            reply from the sever before the client can request again. The client will be blocked until 
                            a reply is sent back. 
                        </Typography>   
                        <br/>
                        <Typography variant='body1'>
                            Asynchronous Communication – does not block the client while waiting for a reply from the
                             server. The client continues to make requests while waiting for the sever to reply. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>6.	ACID</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            Transactions follow an all or nothing protocol. This means they follow all the commands or none of
                            them. This is part of the four properties that transactions stand by. These properties are known as 
                            ACID.
                        </Typography>  
                        <br/> 
                        <Typography variant='body1'>
                            ACID stands for Atomic, Consistent, Isolated, and Durable. Atomic refers to an indivisible 
                            transaction that is not noticeable or invisible to users. Consistent confirms that a transaction’s 
                            system invariants are not violated. Isolated confirms that there are no interferences with concurrent 
                            transactions. Durable confirms that changes are permanent after a transaction is committed. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>7.	Public Keys vs Secret / Private Keys</Typography>
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
                        <Typography variant='h5'>8.	Migrating Code:  Heterogeneous Systems</Typography>
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
                        <Typography variant='h5'>9.	Architectural Style</Typography>
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
                        <Typography variant='h5'>10.	LANs vs WANs</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>
                            LANs – Stands for Local-area networks. 
                        </Typography>  
                        <br/>
                        <Typography variant='body1'>
                            WANs – Stands for Wide-area networks.
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
                        <Typography variant='h5'>11.	BitTorrent </Typography>
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
                        <Typography variant='h5'>12.	Network File System </Typography>
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
                        <Typography variant='h5'>13.	RPC Steps</Typography>
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
                        <Typography variant='h5'>14.	Threads  </Typography>
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
                        <Typography variant='h5'>15.	Thin-Client Network Computing </Typography>
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
                        <Typography variant='h5'>16.	Types of virtualization </Typography>
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
                        <Typography variant='h5'>17.	Server Clusters </Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'>Server Clusters are multiple computers connected to a network. 
                            Each computer has at least one sever running. There are two types of clusters: Local-Area 
                            clusters and Wide-Area clusters.
                        </Typography> 
                        <br/>
                        <Typography variant='body1'>
                            Local-Area clusters – Computers connected though LANs. These typically offer a high bandwidth 
                            and a low latency. The cluster is owned by one organization. It is arranged into three tiers: 
                            Logical switch, application servers, and database system.
                        </Typography>
                        <Typography variant='body1'>
                            Wide-Area clusters – Manges multiple data centers across the world. There can be multiple 
                            organization all using the same cluster. This can cause for a high latency. As cloud computing 
                            becomes more popular more companies are using Wide-Area clusters. Amazon and Google are two 
                            examples of cloud computing that use Wide-Area clusters.
                        </Typography>

                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>18.	The Seven OSI Layers</Typography>
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
                            Physical layer: Standardizes the way two computers are related as well 
                            as how 0s and 1s are represented.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Data link layer: delivers tools for detecting and potentially correcting transmission 
                            errors, in addition to, protocols for keeping a sender and receiver on the same page.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Network layer: Holds the Protocols for handling congestion and for sending and 
                            receiving messages over a computer network.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Transport layer: Holds the protocols for direct support applications that aid data 
                            streaming in real time or set up dependable communication.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Session layer: Supports multiple application sessions. 
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Presentation layer: Recommends a way to represent or interpret data independently 
                            of its hosts that communicating applications operate on.
                        </Typography>
                        <br/>
                        <Typography variant='body1'>
                            Application layer: Includes every other protocols not listed in the other layers. 
                            For example: email, file-transfer and web access.
                        </Typography>
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>19.	Work (From Blockchain)</Typography>
                    </div>
                    <div className="bodies">
                        <Typography variant='body1'> Work is a rigorous puzzle used in Blockchain. It takes a sting 
                            at random and combines it to the existing data, hashes it, and the locates the special 
                            quality from the results. Work requires some guessing based on your data. 
                        </Typography>                         
                    </div>
                    <br/><br/><br/>
                    <div className="h3s">
                        <Typography variant='h5'>20.	Agent Migration (From HostServer)</Typography>
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
                        <Typography variant='h4'>Readings</Typography>
                    </div>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div className="h2s">
                        <Typography variant='h4'>Network Labs</Typography>
                    </div>
                    <br/><br/>
                    <hr/>
                    <br/>
                    <div className="h2s">
                        <Typography variant='h4'>Programming Assignments</Typography>
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
                            the random number given I print the corresponding joke or preverb in the HashMap in the JokeServer.
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
                        <Typography variant='h4'>Books Referenced</Typography>
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
                </body>                   
            </div>
        </main>);
    }
}

export default function homepage(props) {
    return (<ResearchDS classes={props.classes} />);
}