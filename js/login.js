"use strict";function checkInputs(form,e){form.querySelector("input[name='fname']"),form.querySelector("input[name='lname']"),form.querySelector("input[name='email']");var toast,password=form.querySelector("input[name='password']"),form=form.querySelector("#cpassword");password.value!=form.value&&(e.preventDefault(),password=(toast=document.querySelector(".toast")).querySelector(".msg-type"),form=toast.querySelector(".msg-content"),password.textContent="Warning:",form.textContent="Password doesn't match confirmed password.",toast.classList.add("active"),toast.onanimationend=function(){toast.classList.remove("active")})}document.querySelector(".sign-up").onclick=function(e){checkInputs(document.getElementById("signup"),e)};