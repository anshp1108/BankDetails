import logo from './logo.svg';
import './App.css';

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="MainBody">
      <Sidebar />
      <BankDetailsForm />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
          <section id="header">
      <a className='logo' href="#">{/* <img src="img/logo.png" alt="LOGO" />*/}LOGO</a> 
      <div>
        <ul id="navbar">
          <li><a class="active" href="index.html">Home</a></li>
          <li><a href="shop.html">Services</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="about.html">Offers</a></li>
          <li><a href="contact.html">About Us</a></li>
          <li >
            <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a> </li>
            <li >  <a href="#"><i class="fa-solid fa-bell"></i></a> </li>
            <li > <a href="#"><i class="fa-solid fa-user"></i></a> </li>

          
        </ul>
      </div>
    </section>
    </nav>
  );
}

function Sidebar() {
  return (
    <div class="slide-container">
    <div class="sidebar">
      
      <div class="options"><a href="#" ><i class="fas fa-tachometer-alt"></i> <p>My Dashboard</p></a></div>
      <div class="options"><a href="#"><i class="fas fa-link"></i> <p>TOTM Links</p></a></div>
      <div class="options"><a href="#"><i class="fas fa-file-alt"></i> <p>Daily Summary</p></a></div>
      <div class="options active" ><a href="#" class="active"><i class="fas fa-money-bill-alt"></i> <p>Bank Details</p></a></div>
    </div>
   
  </div>
  );
}

function BankDetailsForm() {
  return (
    <div className='mainbodyform'>
      <h2>Bank Details</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    <div className="bank-details">
    
    <form>
      <div className="form-group">
        <label htmlFor="accountHolderName">ACCOUNT HOLDER NAME</label>
        <input type="text" id="accountHolderName" placeholder='Account Holder Name' />
      </div>
      <div className="form-group">
        <label htmlFor="accountNumber">ACCOUNT NUMBER</label>
        <input type="text" id="accountNumber" placeholder='Account Number'/>
      </div>
      <div className="form-group">
        <label htmlFor="ifscCode">IFSC CODE</label>
        <input type="text" id="ifscCode" placeholder='IFSC Code'/>
      </div>
      <div className="form-group">
        <label htmlFor="bankName">BANK NAME</label>
        <input type="text" id="bankName" placeholder='Bank Name' />
      </div>
      <div className="form-group">
        <label htmlFor="bankCity">BANK CITY</label>
        <input type="text" id="bankCity" placeholder='Bank City'/>
      </div>
      <div className="form-group">
        <label htmlFor="branchName">BRANCH NAME</label>
        <input type="text" id="branchName"placeholder='Branch Name' />
      </div>
      <div className="form-group">
        <label htmlFor="relationWithAccountHolder">RELATION WITH ACCOUNT HOLDER</label>
        <input type="text" id="relationWithAccountHolder" placeholder='Relation with Account Holder'/>

      </div>
      <div className="form-group">
        <label htmlFor="consent">CONSENT</label>
        <div className='check-box'>
        <input type="checkbox" name="consent" id="consent" />
        <label>I confirm that the information given in this form is true, complete and accurate. I understand that in case of incorrect details, Exambazaar will not be responsible for any loss of pay.</label>
        </div>
      </div>
      <button type="submit">Save</button>
    </form>

  </div>
  <p className='discri'>THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!</p>
  <hr></hr>
  </div>
  );
}

export default App;
