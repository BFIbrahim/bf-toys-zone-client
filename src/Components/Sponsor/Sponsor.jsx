import React from 'react';

const Sponsor = () => {
    return (
        <div>

            <div className='text-center mb-5'>
                <h1 className='text-3xl font-bold text-red-600'>Our Top Sponsors</h1>
                <p>World Biggest Online Shopping company sponsored us</p>
            </div>

            <div className="carousel carousel-center w-100 mb-10 p-4 space-x-4 bg-orange-50 rounded-box mx-auto">
                <div className="carousel-item">
                    <img src="https://images.theconversation.com/files/461086/original/file-20220503-24-g6watl.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" className="rounded-box h-96" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.supplychainbrain.com/ext/resources/2023/03/29/ALIBABA-OFFICE-iStock-Robert-Way-1368767105.jpg?t=1680104261&width=1080" className="rounded-box h-96" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.headspacegroup.co.uk/wp-content/uploads/2019/12/11-Dec-JHVEPhoto-Shutterstock.com_-300x300.jpg" className="rounded-box" />
                </div>
            </div>
        </div>
    );
};

export default Sponsor;