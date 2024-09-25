// Toggle Elements
const donationBtn = document.getElementById('donationbtn');
const historyBtn = document.getElementById('historybtn');

// Sections
const donationsection = document.getElementById('donationsection');
const historySection = document.getElementById('historySection');

const myBalance = document.getElementById('myBalance');
const modal = document.getElementById('my_modal_1');

// Noakhali Elements
const noakhaliInput = document.getElementById('noakhaliInput');
const noakhaliDonateNowBtn = document.getElementById('noakhaliDonateNowBtn');
const noakhaliBalance = document.getElementById('noakhaliBalance');

// Feni Elements
const feniInput = document.getElementById('feniInput');
const feniDonateNowBtn = document.getElementById('feniDonateNowBtn');
const feniBalance = document.getElementById('feniBalance');

// Quota Elements
const quotaInput = document.getElementById('quotaInput');
const quotaDonateNowBtn = document.getElementById('quotaDonateNowBtn');
const quotaBalance = document.getElementById('quotaBalance');


function donate(amount,balance){
    let donationAmount = parseFloat(amount.value);
    let myTotalBalance = parseFloat(myBalance.innerText);
    if(donationAmount>0 && !isNaN(donationAmount)){
        balance.innerText = `${donationAmount} BDT`;
        myBalance.innerText = `${myTotalBalance - donationAmount}`;
        modal.showModal();
    }
    else{
        alert('Invalid Donation Amount');
    }
    
}

function toogleBtn(idshow, idremove, btnshow, btnremove){
    idshow.classList.remove('hidden');
    idremove.classList.add('hidden');

    btnshow.classList.remove('bg-[#1111114D');
    btnshow.classList.add('bg-[#B4F461]');

    btnremove.classList.remove('bg-[#B4F461]');
    btnremove.classList.add('bg-[#1111114D)');

    
}
