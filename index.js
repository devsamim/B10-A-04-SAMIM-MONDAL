function calculateTax(income, expenses) {
if(typeof income<=0 || expenses>income || expenses<=0 ){
  return "Invalid Input";
}
let incomeEarn = income - expenses;
let = incomeTax =  incomeEarn*0.20;
return incomeTax;
}

function sendNotification(email){
  if (email.includes('@')) {
     let input = email.split('@');
      let username = input[0];
     let domainName = input[+1];
      console.log(username + " sent you an email from " + domainName);
  } else {
      return "Invalid Email";
  }
}

function checkDigitsInName(name){
if(typeof name !=='string'){
  return "Invalid Input";
}
  for(let checkName =0; checkName<name.length; checkName++){
    if (!isNaN(name[checkName]) && name[checkName] !== ' ') {
      return true;
    } 
  }
  return false;
 }

function calculateFinalScore(obj){
if(typeof obj !=="object"){
  return "Invalid Input";
}
  let totalScore = obj.testScore + obj.schoolGrade;
  if(obj.isFFamily){
    totalScore  = totalScore + 20; 
  }
  if(obj.isFFamily && totalScore>=80){
    return true;
  } else if(obj.isFFamily && totalScore<80){
   return false;
  }
  else if(!obj.isFFamily && totalScore>=80){
    return true;
  }else if(!obj.isFFamily && totalScore<80){
    return false;
  }
 }

function waitingTime(waitingTimes , serialNumber){
  if(!Array.isArray (waitingTimes) || typeof serialNumber !=='number'){
    return 'Invalid Input';
  }
  let totalTime = 0;
    for (let time = 0; time < waitingTimes.length; time++) {
        totalTime += waitingTimes[time];
    }
    let avgTime = Math.round(totalTime / waitingTimes.length);
    let waitingList = (serialNumber-1) - waitingTimes.length;
    let isratWaitingTime = avgTime * waitingList;

    return isratWaitingTime;
}




