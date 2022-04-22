'use strict'
const btnCloseModal = document.querySelector('.close-modal');
const btnCloseResultsModal = document.querySelector('.closeResultsModal');
const overlay = document.getElementById('overlay');
const accountModal = document.getElementById('accountModal');
const resultsModal = document.getElementById('resultsModal');
let  amountPlaced=0;
let individualBetAmountWon=0;
let amountWonArray= [];
let totalAmountWon =0;

const closeAccountModal = function(){
    accountModal.style.display='none';
    overlay.style.display='none';
    }

const closeResultsModal = function(){
        resultsModal.style.display='none';
        overlay.style.display='none';
        }
       
   
    document.getElementById('showAccount').addEventListener(
        'click', function(){
            // console.log('button clicked');
            accountModal.style.display='block';
            overlay.style.display='block';
            
        });
    

const goToResults = function(){
            resultsModal.style.display='block';
            overlay.style.display='block';
}

document.getElementById('showResults').addEventListener(
        'click', function(){
            // console.log('button clicked');
            goToResults();
                
            });
  

            btnCloseModal.addEventListener('click',closeAccountModal);
            overlay.addEventListener('click',closeAccountModal); 

            btnCloseResultsModal.addEventListener('click',closeResultsModal);
            overlay.addEventListener('click',closeResultsModal);       


const teams = ["Liverpool", "WestHam","Man u","Man City", "Arsenal","Chelsea","Everton","Tottenham","Watford", "Southampton"];
const teamLogos = [
    "./images/Liverpool.png",
    "./images/Westham.png",
    "./images/Manchester United.png",
    "./images/Manchester City.png",
    "./images/Arsenal.png",
    "./images/Chelsea.png",
    "./images/Everton.png",
    "./images/Tottenham1.png",
    "./images/Watford.png",
    "./images/Southampton.png"];

let matchedLogos =[];
const odds = [3.2,2.5,4.3]
let matchedTeams = [];
let matchOdds = [];
let singleBetChoice = '';
let singleBetOdd;
let singleBetOdds = [];

// let multiBetChoice = '';



let singleBetChoices = []; 
// let usersMultiBetChoices = [];
let betSlip = [];


let team1 = "";
let team2 = "";
let logo1 = "";
let logo2 = "";
let output = "";



// let matchGenerator = function(){  
    
    while (matchedTeams.length < 9){
        const team1Index = Math.trunc(Math.random()*10);
        team1= teams[team1Index];
        logo1= teamLogos[team1Index];  
        const team2Index = Math.trunc(Math.random()*10);
        team2 =teams[team2Index];
        logo2 = teamLogos[team2Index];
        
        
        if(!(matchedTeams.includes(team1,0)||matchedTeams.includes(team2,0))){
            
            if(team1Index != team2Index){
                matchedTeams.push(team1);
                matchedLogos.push(logo1);

                matchedTeams.push(team2);
                matchedLogos.push(logo2);

                output = teams[team1Index] +" "+ teams[team2Index];
                // console.log(output);
            }
    }
    }
        
    // console.log(matchedTeams);
// }
let allMatches;
let getMatches = function(){
    allMatches = [...matchedTeams];
    // console.log(matchedTeams)
    // sessionStorage.setItem('allMatches', JSON.stringify(allMatches));

}



let oddGenerator = function(){  
  
    while (matchOdds.length < 15){
        const odd1Index = Math.trunc(Math.random()*3);
        let team1Odd= odds[odd1Index];    
        const oddDrawIndex = Math.trunc(Math.random()*3);
        let drawOdd =odds[oddDrawIndex];
        const odd2Index = Math.trunc(Math.random()*3);
        let team2Odd =odds[odd2Index];
        
            if((odd1Index != oddDrawIndex)&&(odd1Index !=odd2Index )){
                if((odd2Index != oddDrawIndex)){
                    matchOdds.push(team1Odd);
                    matchOdds.push(drawOdd);
                    matchOdds.push(team2Odd);
                
                    let outputOdds = odds[odd1Index] +" "+ odds[oddDrawIndex]+" "+ odds[odd2Index];
                    // console.log(outputOdds);
                }

                
            }
    
    }


        
    // console.log(matchOdds);
}


let displayMatches = function(){
    for(let i=0; i<matchedTeams.length; i++){
        document.getElementById(`team${i}`).textContent = matchedTeams[i];
        document.getElementById(`img${i}`).src=`${matchedLogos[i]}`;
    }
    
    for(let i=0; i<matchOdds.length; i++){
        document.getElementById(`odd${i}`).textContent = matchOdds[i];
    }
    
}



let match1= {
    team1: {name: matchedTeams[0], odds:matchOdds[0]},
    draw: {name: 'draw1', odds: matchOdds[1]},
    team2: {name: matchedTeams[1], odds:matchOdds[2]}
    

}
let match2= {
    team1: {name: matchedTeams[2], odds:matchOdds[3]},
    draw: {name: 'draw2', odds: matchOdds[4]},
    team2: {name: matchedTeams[3], odds:matchOdds[5]}
    

}
let match3= {
    team1: {name: matchedTeams[4], odds:matchOdds[6]},
    draw: {name: 'draw3', odds: matchOdds[7]},
    team2: {name: matchedTeams[5], odds:matchOdds[8]}
    

}
let match4= {
    team1: {name: matchedTeams[6], odds:matchOdds[9]},
    draw: {name: 'draw4', odds: matchOdds[10]},
    team2: {name: matchedTeams[7], odds:matchOdds[11]}

}
let match5= {
    team1: {name: matchedTeams[8], odds:matchOdds[12]},
    draw: {name: 'draw5', odds: matchOdds[13]},
    team2: {name: matchedTeams[9], odds:matchOdds[14]}

}


let matches = [match1.team1.name, match1.draw.name,match1.team2.name,
               match2.team1.name, match2.draw.name,match2.team2.name,
               match3.team1.name, match3.draw.name,match3.team2.name,
               match4.team1.name, match4.draw.name,match4.team2.name,
               match5.team1.name, match5.draw.name,match5.team2.name];


// for(let i=0; i< oddBtns.length; i++){
//     oddBtns[i].addEventListener('click', function(){
//         match1choice = matches[i];  
//         console.log(match1choice)
        
//     });

// }




const outcomes = ['team1', 'draw', 'team2'];

let match1WinningTeam = match1[outcomes[Math.trunc(Math.random()*3)]];
let match2WinningTeam = match2[outcomes[Math.trunc(Math.random()*3)]];
let match3WinningTeam = match3[outcomes[Math.trunc(Math.random()*3)]];
let match4WinningTeam = match4[outcomes[Math.trunc(Math.random()*3)]];
let match5WinningTeam = match5[outcomes[Math.trunc(Math.random()*3)]];

let winningTeams;

// let getWinningTeams = function(){
    
    winningTeams = [match1WinningTeam.name, match2WinningTeam.name, match3WinningTeam.name, match4WinningTeam.name, match5WinningTeam.name];
    // console.log(winningTeams);
    // sessionStorage.setItem('winningTeams', JSON.stringify(winningTeams));

// }

let page = document.body.id;

let displayAllResults = function(){
                
    // window.location.replace('/results.html');
            // winningTeams = JSON.parse(sessionStorage.getItem('winningTeams'));
            // allMatches = JSON.parse(sessionStorage.getItem('allMatches'));
            // for(let p=0; i<6; i++){
            let table = document.getElementById('allMatches');
            let row1 = table.insertRow(1);
            let row2 = table.insertRow(2);
            let row3 = table.insertRow(3); 
            let row4 = table.insertRow(4);
            let row5 = table.insertRow(5);
            let row6 = table.insertRow(6);

   
            let match1 = row1.insertCell(0);
            let outcome1 = row1.insertCell(1);
            let match2 = row2.insertCell(0);
            let outcome2 = row2.insertCell(1);
            let match3 = row3.insertCell(0);
            let outcome3 = row3.insertCell(1);
            let match4 = row4.insertCell(0);
            let outcome4 = row4.insertCell(1);
            let match5 = row5.insertCell(0);
            let outcome5 = row5.insertCell(1);

            match1.innerHTML = `${allMatches[0]} vs ${allMatches[1]}`;
            outcome1.innerHTML = `${winningTeams[0]}`;

            match2.innerHTML = `${allMatches[2]} vs ${allMatches[3]}`;
            outcome2.innerHTML = `${winningTeams[1]}`;
            
            match3.innerHTML = `${allMatches[4]} vs ${allMatches[5]}`;
            outcome3.innerHTML = `${winningTeams[2]}`;

            match4.innerHTML = `${allMatches[6]} vs ${allMatches[7]}`;
            outcome4.innerHTML = `${winningTeams[3]}`;

            match5.innerHTML = `${allMatches[8]} vs ${allMatches[9]}`;
            outcome5.innerHTML = `${winningTeams[4]}`;

            // match.innerHTML = `hi`;
            // outcome.innerHTML = `hello`;
        // }
       console.log(winningTeams);
            
        // function animateResults(){
        //     for(let i=0; i<winningTeams.length; i++){
        //         let indexOfLogo = matchedLogos.indexOf(teamLogos[teams.indexOf(`${winningTeams[i]}`)]);
               
            
        //         if(teams.includes(winningTeams[i])){                                   
        //             document.getElementById(`img${indexOfLogo}`).classList.add(`img${indexOfLogo}Anim`);
                    
                  
                      
                    
        //         }else if(winningTeams[i] ==`draw1`){
        //             document.getElementById(`img0`).classList.add(`img0Anim`);
        //             document.getElementById(`img1`).classList.add(`img1Anim`);

        //         }else if(winningTeams[i] ==`draw2`){
        //             document.getElementById(`img2`).classList.add(`img0Anim`);
        //             document.getElementById(`img3`).classList.add(`img1Anim`);

        //         }else if(winningTeams[i] ==`draw3`){
        //             document.getElementById(`img4`).classList.add(`img0Anim`);
        //             document.getElementById(`img5`).classList.add(`img1Anim`);

        //         }else if(winningTeams[i] ==`draw4`){
        //             document.getElementById(`img6`).classList.add(`img0Anim`);
        //             document.getElementById(`img7`).classList.add(`img1Anim`);

        //         }else if(winningTeams[i] ==`draw5`){
        //             document.getElementById(`img8`).classList.add(`img0Anim`);
        //             document.getElementById(`img9`).classList.add(`img1Anim`);
        //         }
                                  
                
            
        //     }
            
        // }
}

// if(page === 'home'){  
//     // matchGenerator();
//     oddGenerator();
//     displayMatches();
// }
// // matchGenerator();
// getMatches();
// getWinningTeams();
// displayAllResults();



const betInfo ={
    choices: [],
    results: []

}

let placeBets= function(){
        const oddBtns = [];
         for(let i=0; i<matchOdds.length; i++){
            oddBtns[i] = document.getElementById(`odd${i}`)
       
            
// let placeBets= function(){
        for(let i=0; i< oddBtns.length; i++){
        oddBtns[i].onclick=function(){
            document.getElementById('placeSingleBet').style.display="flex";
            
            singleBetChoice = matches[i];
            singleBetOdd = matchOdds[i]; 
            // console.log(match1choice)
        //   let pickSingleBetChoices = function(choice){
            // choice = singleBetChoice;
            singleBetChoices.push(singleBetChoice);
            singleBetOdds.push(singleBetOdd);
            betInfo.choices = [...singleBetChoices];
            // sessionStorage.setItem('singleBetChoices', JSON.stringify(singleBetChoices));
            document.getElementById(`odd${i}`).style.background='gainsboro';
    
            
            // function removeFrombetSlip (){
            //     let itemToRemove = singleBetChoices.indexOf(singleBetChoice);
            //     singleBetChoices.splice(itemToRemove, );
            // }
            
            // if(singleBetChoices.includes(singleBetChoice)){
            //     oddBtns[i].onclick=removeFrombetSlip();
            // }
            
            
                int: amountPlaced= document.getElementById('betAmount').value;
                
            
            
    
          
                
            
                function addNewBetSlipItem(){
    
                    let table = document.getElementById('betslip');
                    let row = table.insertRow(1);
                    
    
                    let teamName = row.insertCell(0);
                    let odds = row.insertCell(1);
                    let possibleWin = row.insertCell(2);
                    


                    teamName.innerHTML = singleBetChoice;
                    odds.innerHTML = `${matchOdds[i]}`;
                    possibleWin.innerHTML = `${matchOdds[i]*amountPlaced}.00`;
                    
                    let totalPossibleWin=0;
                    
                    for(let i=0; i<singleBetOdds.length; i++){
                        
                        totalPossibleWin += (singleBetOdds[i]*amountPlaced);
                    }
                    
                    document.getElementById('showTotalPossibleWin').textContent = `Ksh.${totalPossibleWin}`;
                }

            
                    addNewBetSlipItem();
                
                
    
            
        };
        let matchResults = [];
        let betResults = [];
        let placeSingleBet = function(){
            betSlip = [...singleBetChoices];
    
            let singleBetResults = function(){
                for(let i=0; i<betSlip.length; i++){
                    if(winningTeams.includes(betSlip[i])){
                        matchResults[i] = `${winningTeams[i]} won`;
                        individualBetAmountWon = amountPlaced*singleBetOdds[i];
                        
                        amountWonArray.push(individualBetAmountWon);

                        // amountWon = amountPlaced + amountPlaced *matchOdds[i]
                        betResults[i] = `won`;
                        // console.log(betResults[i], );
                    }else{
                        
                        matchResults[i] = `${winningTeams[i]} won`;
                        betResults[i] = `lost`;
                        individualBetAmountWon = 0;
                        amountWonArray.push(individualBetAmountWon);
                        // console.log(betResults[i], );
                    }
                    
                }

                for(let i=0; i<amountWonArray.length; i++){
                    totalAmountWon += amountWonArray[i];
                }
                
               
            betInfo.results =[...betResults];

            console.log(amountWonArray);
            console.log(totalAmountWon);
            
        

            function displayResults(){
                for(let i=0; i<betSlip.length; i++){
    
                let table = document.getElementById('selectedMatches');
                let row = table.insertRow(1);
    
               
                let pickedCchoice = row.insertCell(0);
                // let result = row.insertCell(1);
                let betresult = row.insertCell(1);
    
                pickedCchoice.innerHTML = `${singleBetChoices[i]}`;
                // result.innerHTML = `${matchResults[i]}`;
                betresult.innerHTML = `${betResults[i]}`;
    
    
                }  
            }
            
            // function displayAllResults(){
                
               
    
                    
            //             // for(let p=0; i<6; i++){
            //             let table = document.getElementById('allMatches');
            //             let row = table.insertRow(1);
    
               
            //             let match = row.insertCell(0);
            //             let outcome = row.insertCell(1);
    
            //             // match.innerHTML = `${matchedTeams[1]} vs ${matchedTeams[2]}`;
            //         // result.innerHTML = `${matchResults[i]}`;
            //             // outcome.innerHTML = `${winningTeams[1]}`;
            //             // match.innerHTML = `hi`;
            //             // outcome.innerHTML = `hello`;
            //         // }
    
                    
    
                
                 
            // }
            // displayAllResults();
            // // displayResults();
    
        }
    
            
            singleBetResults();
        }
        document.getElementById('placeSingleBet').addEventListener('click', function(){
            
            document.getElementById('kickOff').style.display="flex";
        }); 
       
        document.getElementById('placeSingleBet').onclick= placeSingleBet;
    
        // let placeMultiBet = function(){
        //     betSlip = [...singleBetChoices];
    
        //     let multiBetResults = function(){
        //         let betStatus = "winning";
        //         // while(status != "lost"){
        //             if(betStatus != "lost"){
        //                 for(let i=0; i< betSlip.length; i++){
        //                     if(!winningTeams.includes(betSlip[i])){
        //                         betStatus = "lost";
        //                         // console.log(usersMultiBetChoices[i], "lost!");
        //                         // console.log("Bet Lost!")
        //                         break;
        //                     }else if(winningTeams.includes(betSlip[i])){
        //                         betStatus = "winning";
        //                         // console.log(usersMultiBetChoices[i], "won!");                   
        //                     }
        //                 }
        //             }
        //             if(betStatus === "winning" ){
        //                 console.log("MultiBet won!")
        //             }else{
        //                 console.log("MultiBet lost")
        //             }
        //     } 
        //     multiBetResults();   
        // }
        // document.getElementById('placeMultiBet').onclick=placeMultiBet;
     
    
    
        // function openSignUpForm(){
        //     document.getElementById()
        // }
    }
    // placeBets();
}
}

let displayResults = function(){
    document.getElementById('showAmountWon').innerHTML = `KSH.${totalAmountWon}`;
    document.getElementById('amountAvailable').placeholder = `KSH.${totalAmountWon}`;

    window.setInterval(function(){
        if((betInfo.choices[0] === singleBetChoices[0])){
            // console.log(betInfo.choices);
            // console.log(betInfo.results);
    
            function getResults(){
                for(let i=0; i<betSlip.length; i++){
    
                let table = document.getElementById('selectedMatches');
                let row = table.insertRow(1);
    
               
                let pickedCchoice = row.insertCell(0);
                // let result = row.insertCell(1);
                let betresult = row.insertCell(1);
    
                pickedCchoice.innerHTML = `${singleBetChoices[i]}`;
                // result.innerHTML = `${matchResults[i]}`;
                betresult.innerHTML = `${betInfo.results[i]}`;
    
    
                }
            }
            getResults();
    
            betInfo.choices = [];
            betInfo.results =[];
            
    
        }
        
    },5000)
}


    let actualWinners = [];
    let losingTeams = [];
    let draws = [];
  
        
    for (const item of winningTeams) {
        if (item == 'draw1'){
            draws.push(matchedTeams[0]);
            draws.push(matchedTeams[1]);
        }
        else if (item == 'draw2'){
            draws.push(matchedTeams[2]);
            draws.push(matchedTeams[3]);
        }
        else if (item == 'draw3'){
            draws.push(matchedTeams[4]);
            draws.push(matchedTeams[5]);
        }
        else if (item == 'draw4'){
            draws.push(matchedTeams[6]);
            draws.push(matchedTeams[7]);
        }
        else if (item == 'draw5'){
            draws.push(matchedTeams[8]);
            draws.push(matchedTeams[9]);
        }
    }
    // console.log(draws);

    
        for (const item of winningTeams) {
            if ((item != 'draw1')&&(item != 'draw2')&&(item != 'draw3')&&(item != 'draw4')&&(item != 'draw5')){
                actualWinners.push(item)
            }
            
        }
        // console.log(actualWinners);

        for (const item of teams) {
            if((!actualWinners.includes(item))&&(!draws.includes(item))){
                losingTeams.push(item)
                // console.log(item)
            }
            
        }


// console.log(losingTeams)
    
let animateResults = function(){
         for(let i=0; i<actualWinners.length; i++){
            let indexOfLogo = matchedLogos.indexOf(teamLogos[teams.indexOf(`${actualWinners[i]}`)]);
            document.getElementById(`img${indexOfLogo}`).classList.add(`img${indexOfLogo}Anim`);

         }
         for(let i=0; i<draws.length; i++){
            let indexOfLogo = matchedLogos.indexOf(teamLogos[teams.indexOf(`${draws[i]}`)]);
            document.getElementById(`img${indexOfLogo}`).classList.add(`img${indexOfLogo}Anim`);

         }
         for(let i=0; i<losingTeams.length; i++){
            let indexOfLogo = matchedLogos.indexOf(teamLogos[teams.indexOf(`${losingTeams[i]}`)]);
            if(indexOfLogo %2 != 0){
                document.getElementById(`img${indexOfLogo}`).classList.add(`imgMoveUpSlow`);
            }else{
                document.getElementById(`img${indexOfLogo}`).classList.add(`imgMoveDownSlow`);
            }
                
           

         }

    
        }  


// singleBetChoices = JSON.parse(sessionStorage.getItem('singleBetChoices'));
let goToResultsPage = function(){
    
    document.getElementById('kickOff').addEventListener('click', function(){
        for(let i=0; i<15; i++){
            document.getElementById(`odd${i}`).style.background='lightslategrey';

        }

        document.getElementById('defaultText1').classList.add('hidden');
        document.getElementById('defaultText2').classList.add('hidden');
        document.getElementById('selectedMatches').classList.remove('hidden');
        document.getElementById('allMatches').classList.remove('hidden');
        document.getElementById('playAgain').classList.remove('hidden');
        document.getElementById('playAgain').addEventListener('click', function(){
            window.location.replace('./index.html');
        })

        
        setTimeout(function(){
            goToResults();
        },6000);
        animateResults();
        displayResults();
        
        
    })
}

if(page === 'home'){  
    // matchGenerator();
    oddGenerator();
    getMatches();
    displayMatches();
    placeBets();
    // getWinningTeams();
    displayAllResults();
    goToResultsPage();

//    document.getElementById('img0').classList.add('img0Anim');
   
    
    
    

    
   
    

// const overlay = document.querySelector('.overlay');

} 



// matchGenerator();
// getMatches();
// getWinningTeams();
// displayAllResults();
// displayResults();












// console.log(match1.team1, match1.draw, match1.team2);
// console.log(match2);
// console.log(match3);
// console.log(match4);
// console.log(match5);
// console.log(winningTeams);
// singleBetChoices = ["Liverpool","WestHam","Man u","Man City", "Arsenal"];
// usersMultiBetChoices = ["Liverpool","WestHam","Man u","Man City", "Arsenal"];
// placeSingleBet();



