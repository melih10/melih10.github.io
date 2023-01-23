import React from 'react'
import './Footer.css'


const Footer = () => (
  <div className="footer-dark">
  <footer>
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-3 item">
                  <h3>Gizlilik</h3>
                  <ul> 
                      <li><a href="#">KVKK</a></li>
                      

                  </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                  <h3>İletişim</h3>
                  <ul>
                      <li><a href="mailto:bidunyamevzu@gmail.com" target="_blank" rel="noopener noreferrer" >boss@gmail.com</a></li>
                     
                  </ul>
              </div>
             
          </div>
          <p className="copyright">Bi'Dünya Mevzu © 2023</p>
      </div>
  </footer>
</div>
  );

export default Footer