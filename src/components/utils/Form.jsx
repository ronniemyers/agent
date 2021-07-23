// import React from "react";

// function Form({promptForm}) {
//   }
//   return (
//     <div className="grid-container">
//         <header>
//           <div className="item1">
//             <Header />
//             <h1>{promptForm} Agent</h1>
//           </div>
//         </header>
//         <div>
//           <main>
//             <div className="flex-container">
//               <form onSubmit={promptForm === "Add" ? addFormSubmitHandler : editFormSubmitHandler}>
//                 <div className="form-agent">
//                   <label htmlFor="firstName">First name</label>
//                   <input
//                     className="form-control"
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formAgent.firstName}
//                     onChange={formInputOnChangeHandler}
//                   />
//                 </div>
//                 <div className="form-agent">
//                   <label htmlFor="middleName">Middle name</label>
//                   <input
//                     className="form-control"
//                     type="text"
//                     id="middleName"
//                     name="middleName"
//                     value={formAgent.middleName}
//                     onChange={formInputOnChangeHandler}
//                   />
//                 </div>
//                 <div className="form-agent">
//                   <label htmlFor="lastName">Last name</label>
//                   <input
//                     className="form-control"
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formAgent.lastName}
//                     onChange={formInputOnChangeHandler}
//                   />
//                 </div>
//                 <div className="form-agent">
//                   <label htmlFor="dob">Date of birth</label>
//                   <input
//                     className="form-control"
//                     type="date"
//                     id="dob"
//                     name="dob"
//                     value={formAgent.dob}
//                     onChange={formInputOnChangeHandler}
//                   />
//                 </div>
//                 <div className="form-agent">
//                   <label htmlFor="heightInInches">Height (inches)</label>
//                   <input
//                     className="form-control"
//                     type="number"
//                     id="heightInInches"
//                     name="heightInInches"
//                     value={formAgent.heightInInches}
//                     onChange={formInputOnChangeHandler}
//                     min="1"
//                   />
//                 </div>
//                 <div className="form-agent flex-container">
//                   <input type="submit" value="Submit"></input>
//                   <Link to="/agents" className="cancel-btn">
//                     <i>Cancel</i>
//                   </Link>
//                 </div>
//               </form>
//             </div>
//             <Error errors={errors} />
//           </main>
//           <nav>
//             <NavBar />
//           </nav>
//           <footer>
//             <div className="item4">
//               <p>&copy; Field Agent 2021</p>
//             </div>
//           </footer>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;
