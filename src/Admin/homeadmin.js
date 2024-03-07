import React from 'react';
import'./adminhome.css'
// const MyComponent = () => {
//     return (
//   <>
//   <div id='acard'>
//       <div class="card">
//   <div class="header">
//     <h1>35</h1>
//   </div>
//   <div class="container">
//     <p>Doctors</p>
//   </div>
// </div></div>


//   <div id='bcard'>
// <div class="card">
//   <div class="header">
//     <h1>100</h1>
//   </div>
//   <div class="container">
//     <p>Patients</p>
//   </div></div>


//   <div id='ccard'>
// </div><div class="card">
//   <div class="header">
//     <h1>1</h1>
//   </div>
//   <div class="container">
//     <p>Admin</p>
//   </div>
// </div></div>


//      </>   
//     );
// };

// export default MyComponent;


const cardData = [
    {
      
        imageSrc: 'https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-cartoon-style-3d-illustration-of-a-male-doctor-holding-a-folder-image_3826989.jpg',
        backContent: {
            title: 'Doctors',   
            profession: '35',
            // details: 'W-x-y-z'
        }
    },
    {
        
        imageSrc: 'https://t3.ftcdn.net/jpg/03/10/61/34/360_F_310613409_bBe2DBeScgbycqwWqPStJK1PREze0u9S.jpg',
        backContent: {
            title: 'Patients',
            profession: '75',
            // details: 'W-x-y-z'
        }
    },
    {
       
        imageSrc: 'https://www.itarian.com/images/itsm/admin-management-tools.png',
        backContent: {
            title: 'Admin',
            profession: '1',
            // details: 'W-x-y-z'
        }
    },
    {
        
        imageSrc: 'https://as1.ftcdn.net/v2/jpg/03/50/28/06/1000_F_350280674_9dBkVIDFn2a9Dp3jGUfeizFscRl9HHzH.jpg',
        backContent: {
            title: 'Total Users',
            profession: '365',
            // details: 'W-x-y-z'
        }
    },
    
    // Add more card data as needed
];

const MyComponent = () => {
    return (
        <figure style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' ,marginLeft:'20%',}}>
            {cardData.map((card, index) => (
                <div key={index} className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={card.imageSrc} alt="Avatar" style={{ width: "300px", height: "300px",borderRadius:"10px"}} />
                        </div>
                        <div className="flip-card-back">
                            <h1>{card.backContent.title}</h1>
                            <h1>{card.backContent.profession}</h1>
                            {/* <p>{card.backContent.details}</p> */}
                        </div>
                    </div>
                </div>
            ))}
        </figure>
    );
};

export default MyComponent;