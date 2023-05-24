import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-red-600 text-3xl font-bold text-center mt-4 mb-4'>Question And Answer</h1>

            <div>
                <div className="bg-orange-50 p-4 rounded-md text-left mb-4 md:w-4/5 mx-auto border-2">
                    <strong>What is an access token and refresh token? How do they work and where should we store them on the client-side?</strong><br /><br />
                    <p> <strong>Acces token:</strong> Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API.</p> <br />

                    <p><strong>Refresh Token:</strong> A refresh token is a special token that is used to obtain additional access tokens.</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-md text-left mb-4 md:w-4/5 mx-auto border-2">
                    <strong>Compare SQL and NoSQL databases</strong><br /><br />
                    <p> <strong>SQL: </strong> SQL is a domain-specific language used to query and manage data. It works by allowing users to query, insert, delete, and update records in relational databases. SQL also allows for complex logic to be applied through the use of transactions and embedded procedures such as stored functions or views.</p> <br />

                    <p><strong>No SQL:</strong> NoSQL stands for Not only SQL. It is a type of database that uses non-relational data structures, such as documents, graph databases, and key-value stores to store and retrieve data. NoSQL systems are designed to be more flexible than traditional relational databases and can scale up or down easily to accommodate changes in usage or load. This makes them ideal for use in applications.</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-md text-left mb-4 md:w-4/5 mx-auto border-2">
                    <strong>What is express js? What is Nest JS?</strong><br /><br />
                    <p> <strong>Express JS:</strong> Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.</p> <br />

                    <p><strong>Next JS:</strong> Next.js is a flexible React framework that gives you building blocks to create fast web applications.</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-md text-left mb-4 md:w-4/5 mx-auto border-2">
                    <strong>What is MongoDB aggregate and how does it work?</strong><br /><br />
                    <p> What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p> <br />

                </div>
            </div>
        </div>
    );
};

export default Blog;