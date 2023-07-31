import React from 'react'

const date = new Date();
const years = date.getFullYear();
export default function Footer() {
   return (
         <footer className="fix-bottom container-fluid py-3 fixed-bottom ">
         <div className="container text-secondary text-center">
            Copyright &copy {years}
         </div>
      </footer>
   )
}
