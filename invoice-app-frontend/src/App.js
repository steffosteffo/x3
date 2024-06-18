import React, { useState } from 'react';
import InvoiceForm from './InvoiceForm';
import CustomerForm from './CustomerForm';
import EditCustomerForm from './EditCustomerForm';
import ProductForm from './ProductForm';
import EditProductForm from './EditProductForm';
import Email from './Email';
import LoginForm from './LoginForm';

function App() {
  const [selectedForm, setSelectedForm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sumUser, setSumUser] = useState(0);
  const [loggedInUser, setLoggedInUser] = useState('');

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setSumUser(1);
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSumUser(0);
    setLoggedInUser('');
  };

  const handleSelectForm = (formName) => {
    setSelectedForm(formName);
  };

  return (
    <div className="App">
      {!isAuthenticated || sumUser === 1 ? ( //star2
        <LoginForm onLogin={handleLogin} sumUser={sumUser} />
      ) :  ( 
        
        <>
          <h1>Fakturering</h1>
          <p>Welcome, {loggedInUser}!</p>
          <button onClick={handleLogout}>Logga ut</button>
          <div>
            <button onClick={() => handleSelectForm('Email')}>Email</button>
            <button onClick={() => handleSelectForm('customer')}>Registrera Kund</button>
            <button onClick={() => handleSelectForm('editCustomer')}>Ändra Kund</button>
            <button onClick={() => handleSelectForm('Product')}>Registerera Produkt</button>
            <button onClick={() => handleSelectForm('editProduct')}>Ändra Produkt</button>
            <button onClick={() => handleSelectForm('invoice')}>Fakturera till Kund</button>
          </div>
          {selectedForm === 'Email' && <Email />}
          {selectedForm === 'customer' && <CustomerForm />}
          {selectedForm === 'editCustomer' && <EditCustomerForm />}
          {selectedForm === 'Product' && <ProductForm />}
          {selectedForm === 'editProduct' && <EditProductForm />}
          {selectedForm === 'invoice' && <InvoiceForm />}
        </>
      )}
    </div>
  );
}

export default App;
