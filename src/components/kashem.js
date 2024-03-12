import React, { useState, useEffect } from "react";
import "../styles/Main.css";
import "../styles/Result.css";

//150 questions here
const questions = [
  {
    id: 837,
    question: "Earthquakes are recorded by:",
    options: ["Barometer", "Oscillator", "Voltmeter", "Seismograph"],
    answer: 3,
  },
  {
    id: 772,
    question: "Location of the Main Dressing Station (MDS) is decided by the:",
    options: ["CO", "2IC", "ADMS", "All of the above"],
    answer: 2,
  },

  {
    id: 591,
    question: "Which one is included in the principles of armor tactics?",
    options: ["Initiative", "Concentration", "Economy of force", "b and c"],
    answer: 3,
  },
  {
    id: 8,
    question:
      "Which are the best suited for Close attack troops to provide close support against enemy tanks?",
    options: ["ATGM", "Tanks", "APC", "ARV"],
    answer: 1,
  },
  {
    id: 838,
    question:
      "How many spans are there in Padma Bridge and what is the length of each span?",
    options: ["41 and 125 m", "40 and 150 m", "41 and 150 m", "40 and 125 m"],
    answer: 2,
  },
  {
    id: 9,
    question: "Battalion screen normally deploys:",
    options: [
      "1-2 km forward of the main position",
      "2-3 km forward of the main position",
      "3-4 km forward of the main position",
    ],
    answer: 1,
  },
  {
    id: 10,
    question:
      "Battalion screen assumes responsibility from division/brigade control covering troops/advance positions at",
    options: [
      "Break Clean Line",
      "Battle Handover Line",
      "Fire Support Coordination Line",
      "Line of FDL",
    ],
    answer: 1,
  },
  {
    id: 11,
    question: "The primary tasks of MG in defense:",
    options: [
      "Cover by fire the frontages of own company and battalion defense area",
      "Cover gaps between company and battalion defense area",
      "Assist in Counter penetration",
      "Support a Close attack",
    ],
    answer: 0,
  },
  {
    id: 12,
    question: "Who all stay in company CP in defense:",
    options: [
      "Coy comd, runner, op and Sp Pl Comd",
      "Coy comd, his runner, op and Coy 2IC",
      "Coy comd, his runner, op and SJCO",
      "Coy comd, his runner, op and 1x sentry",
    ],
    answer: 0,
  },
  {
    id: 13,
    question:
      "The deliberate Close attack is normally a formation operation mounted with at least a",
    options: ["Coy", "Bn", "Bde", "Div"],
    answer: 1,
  },
  {
    id: 14,
    question:
      "Operations behind the enemy line satisfy one of the major tenets of the army operation",
    options: [
      "Mission-oriented command and control",
      "Non-Linear engagement ",
      "Conservation of combat power",
      "None of the above",
    ],
    answer: 1,
  },
  {
    id: 399,
    question:
      "Officer will be graded in the gradation list and in their Arms or Service according to the dates of their:",
    options: [
      "Army seniority",
      "BA number seniority",
      "Unit seniority",
      "None of these",
    ],
    answer: 0,
  },
  {
    id: 15,
    question: "Counter penetration takes place in which stages of defense?",
    options: [
      "Prep Stage",
      "Counter Attack stage",
      "Assault Stage",
      "None of the above",
    ],
    answer: 2,
  },
  {
    id: 16,
    question: "In TRD, the following is an essential timing:",
    options: [
      "Final abandonment time",
      "Thinning out time",
      "Time for clear of a line",
      "No rearward movement except recce party",
    ],
    answer: 3,
  },
  {
    id: 17,
    question:
      "In a battalion during night TRD, the forward platoons of the forward companies cannot withdraw before:",
    options: ["Denial time", "Final abandonment time", "Thinning out time"],
    answer: 0,
  },
  {
    id: 18,
    question: "In TRD, coy RV is normally given protection by",
    options: ["Two LMG gp", "One sec", "Two sec"],
    answer: 1,
  },
  {
    id: 19,
    question:
      "In TRD at night, following may take place at the time of denial:",
    options: [
      "Depth platoons of forward coys starts thinning out",
      "Forward platoons of forward coys starts withdrawal",
      "Forward platoons of depth coys starts thinning out",
    ],
    answer: 1,
  },
  {
    id: 20,
    question: "In TRD, time for clear of a line is necessary for:",
    options: [
      "Maintaining progress of TRD",
      "Ensuring timely occupation of intermediate position",
      "Enabling support artillery and air force to engage enemy freely",
    ],
    answer: 2,
  },
  {
    id: 21,
    question: "Company checkpoint is manned by",
    options: [
      "Kote NCO or Company Clerk",
      "RL Number or any senior soldier of the platoon",
      "Company sergeant Major of Kote NCO",
      "CQMS or any senior soldier of the platoon",
    ],
    answer: 0,
  },
  {
    id: 22,
    question:
      "In TRD, general first to withdraw after recce parties are the ___________ immediately after the last light:",
    options: [
      "Non-essential stores and personnel",
      "Special weapons",
      "Parties responsible for manning the checkpoint",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 23,
    question:
      "Who is responsible for collecting non essentials after distributing the evening food at coy level?",
    options: ["CSM", "CQMS", "Pl Sgt", "Sec Comd"],
    answer: 1,
  },
  {
    id: 24,
    question:
      "During adv, in an open country with good visibility the leading company may be spread on the road for as long a distance as",
    options: ["1000-1400 m", "900-1300 m", "1100-1400 m", "1200-1400 m"],
    answer: 2,
  },
  {
    id: 773,
    question:
      "A field ambulance is capable of functioning as a ________ bedded hospital",
    options: ["50", "25", "75", "100"],
    answer: 0,
  },
  {
    id: 497,
    question: "When did Bir Shreshtro Matiur Rahman die in an air crash?",
    options: [
      "20 July 1971",
      "20 August 1971",
      "25 August 1971",
      "05 January 1972",
    ],
    answer: 1,
  },
  {
    id: 871,
    question: "Who wrote 'War and Peace'?",
    options: [
      "Leo Tolstoy",
      "George Bernard Shaw",
      "Charles Dickens",
      "Kipling",
    ],
    answer: 0,
  },
  {
    id: 872,
    question: "What was the former name of Sri Lanka?",
    options: ["Ceylon", "Ceelon", "Shin Hall", "Sealons"],
    answer: 0,
  },
  {
    id: 774,
    question:
      "Through a jungle terrain, stretcher bearers can carry a casualty for a distance of:",
    options: ["100-200 yds", "300-400 yds", "200-500 yds", "400-600 yds"],
    answer: 3,
  },

  {
    id: 775,
    question: "Disposal of dead during war is the responsibility of:",
    options: ["AG's Branch", "GS Branch", "QMG Branch", "MGO Branch"],
    answer: 0,
  },

  {
    id: 776,
    question: "Which one provides medical support during offensive ops & TRD?",
    options: ["MDS", "MHT", "Mobile ADS", "ADS"],
    answer: 2,
  },
  {
    id: 25,
    question:
      "In adv, which element provides support to the advancing force in the form of mobile troops and flank guard?",
    options: ["Covering Troops", "Advance Guard", "Vanguard", "Main Guard"],
    answer: 0,
  },
  {
    id: 26,
    question:
      "While starting advance operation, the start point is a ground feature to be selected on which of the following?",
    options: [
      "Axis of the advance",
      "Map",
      "Near Concentration Area",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 338,
    question: "Promotion of the rank of WO is also notified in the:",
    options: ["DO Pt II", "Official Gazette", "DO Pt I", "CR"],
    answer: 1,
  },

  {
    id: 339,
    question:
      "Qtr Gds will be maintained by major units according to the decision of the:",
    options: ["Fmn/sta comd", "Concerned unit Command", "Bde Command", "CO"],
    answer: 0,
  },
  {
    id: 27,
    question:
      "In advance, if the opposition is too strong to be driven out then the vanguard will assist the deployment of:",
    options: ["Advance Guard", "Rear Guard", "Main Guard", "Flank Guard"],
    answer: 2,
  },
  {
    id: 28,
    question: "Battalion will concentrate in the",
    options: [
      "Assembly Area",
      "Concentration Area",
      "Start Line",
      "Start Point",
    ],
    answer: 0,
  },
  {
    id: 29,
    question:
      "In advance, the _______ point platoon should be capable of clearing a __________ position:",
    options: [
      "Weapon detachment",
      "Section",
      "Part of section",
      "None of the above",
    ],
    answer: 1,
  },
  {
    id: 74,
    question: "A field ambulance is capable of functioning as ________",
    options: ["10", "25", "50", "100"],
    answer: 2,
  },
  {
    id: 75,
    question:
      "An accident in which one or more persons (civil or military) is/are killed on the spot or die(s) subsequently as a result of injuries received is termed as:",
    options: [
      "'Fatal' accident",
      "'Serious' accident",
      "'Minor' accident",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 76,
    question:
      "In case of journeys in connection with training, OC unit of which the transport belongs is sanctioning authority for use of '' Type Load/passenger carrying vehicles, within radius of miles:",
    options: ["20", "30", "50", "80"],
    answer: 1,
  },
  {
    id: 77,
    question: "The field scale of ration is issued under:",
    options: [
      "Ground Condition",
      "Field Condition",
      "Service Condition",
      "All of the above",
    ],
    answer: 1,
  },
  {
    id: 78,
    question:
      "________ of money earned for civil feeding should be saved to use for improving diet on special days and for share/iftar during the month of Ramadan",
    options: ["10%", "90%", "50%", "10%- 15%"],
    answer: 0,
  },
  {
    id: 79,
    question:
      "A section should be tested on judging distance for a distance of:",
    options: [
      "500 to 7000 meters",
      "100 to 1000 meters",
      "1000 to 2000 meters",
      "300 to 5000 meters",
    ],
    answer: 1,
  },
  {
    id: 103,
    question: "A fd amb is capable of func as:",
    options: ["10", "25", "50", "100"],
    answer: 2,
  },
  {
    id: 104,
    question:
      "An accident in which one or more pers (civ or mil) is/are killed on the spot or die(s) subseq as a result of injuries received is termed as:",
    options: [
      "'Fatal' accident",
      "'Serious' accident",
      "'Minor' accident",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 105,
    question:
      "In case of journeys in connection with trg, OC unit of which the tpt belongs is sanctioning auth for use of '' Type Load/pax carr veh, within radius of miles:",
    options: ["20", "30", "50", "80"],
    answer: 1,
  },
  {
    id: 106,
    question: "The fd scale of rat is issued under:",
    options: ["Grd Condition", "Fd Condition", "Svc Condition", "All of above"],
    answer: 1,
  },
  {
    id: 107,
    question:
      "of money earn for civil feeding should be saved to ut for impv diet on spl days and for share/iftar during the month of Ramadan:",
    options: ["10%", "90%", "50%", "10%- 15%"],
    answer: 0,
  },
  {
    id: 108,
    question: "A sec should be tested on judging dstn for a dstn of:",
    options: [
      "500 to 7000 meters",
      "100 to 1000 meters",
      "1000 to 2000 meters",
      "300 to 5000 meters",
    ],
    answer: 1,
  },
  {
    id: 109,
    question:
      "Kit insp and check of indl kit will be carr out as freq as poss and at least once:",
    options: ["A Month", "In three months", "In four months", "In six months"],
    answer: 0,
  },
  {
    id: 110,
    question: "ADOS at Division HQ can sanction LP amounting:",
    options: ["Taka 30,000", "Taka 45,000", "Taka 60,000", "Taka 90,000"],
    answer: 2,
  },
  {
    id: 111,
    question: "Which one is not the main duties of MP?",
    options: [
      "Tfc con",
      "Prevention and detection of crime",
      "The supervision and enforcement of discip regulations",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 112,
    question:
      "Original copies of daily orders part I will be destroyed after a pd of:",
    options: ["1 years", "2 years", "3 years", "4 years"],
    answer: 2,
  },
  {
    id: 113,
    question: "Fd Wksp Coy is designed to provide EME cover to:",
    options: ["Bde gp", "Div", "None of the above", "a and "],
    answer: 0,
  },
  {
    id: 114,
    question: "Dismissed officer will vacate the Govt married accommodation:",
    options: [
      "Within 7 days",
      "15 days",
      "Immediately on receipt of dismissal order",
      "None of above",
    ],
    answer: 2,
  },
  {
    id: 115,
    question: "Oil and lub for wpns, bty acids and distilled water are sup by:",
    options: ["ST Bn", "Ord", "EME", "None of the above"],
    answer: 1,
  },
  {
    id: 116,
    question:
      "Who is the sole auth for the allotment of Army numbers iro JCO/ORs to his Regt/Corps:",
    options: ["Dte concerned", "DPA", "OIC Record", "None"],
    answer: 2,
  },
  {
    id: 1,
    question:
      "Which one of the following is not included in battlefield imperative ?",
    options: [
      "Ensure Unity of Effort",
      "Dominate Events",
      "Maint Bal",
      "Firepower",
    ],
    answer: 3,
  },
  {
    id: 2,
    question:
      "______________are positioned at a place from where they can readily intervene if the situation demands",
    options: [
      "Covering Troops",
      "Advance Position",
      "Reserve",
      "None of the above",
    ],
    answer: 2,
  },
  {
    id: 3,
    questions:
      "In a theatre of war / operation, enemy forces should be simultaneously engaged throughout the",
    options: [
      "Non linear Engagement",
      "Lines of operation",
      "Unorthodox operation",
      "Unconventional war",
    ],
    answer: 1,
  },
  {
    id: 4,
    question: "Which is not a Dynamics of combat power:",
    options: ["Manoeuvre", "Fire Power", "Leadership", "Maint Bal"],
    answer: 3,
  },
  {
    id: 474,
    question:
      "When did Bangabandhu Sheikh Mujibur Rahman declare East Bengal as Bangladesh?",
    options: ["5th Dec 1969", "7th Dec 1969", "16th Dec 1969", "7th Mar 1970"],
    answer: 0,
  },
  {
    id: 475,
    question: "Who designed the National Flag of Bangladesh?",
    options: [
      "Kamrul Hasan",
      "Moinul Hossain",
      "Hamidur Rahman",
      "Shamim Shikdar",
    ],
    answer: 0,
  },
  {
    id: 476,
    question: "Where was the body of Bir Sreshtho Hamidur Rahman buried?",
    options: [
      "Banani Graveyard",
      "Azimpur Graveyard",
      "Mohammadpur Graveyard",
      "Mirpur Shahid Buddhijibi Graveyard",
    ],
    answer: 3,
  },
  {
    id: 477,
    question:
      "When did Bangabandhu return to Bangladesh from confinement at Pakistan after the LW?",
    options: ["16 Dec 1971", "10 Jan 1972", "12 Jan 1972", "None of the above"],
    answer: 1,
  },
  {
    id: 478,
    question: "Language movement of 1952 created",
    options: [
      "A new national perception",
      "A new social system",
      "Political Doctrine",
      "None of the Above",
    ],
    answer: 0,
  },
  {
    id: 479,
    question: "Who was the first comd of KILO Flight?",
    options: [
      "Gp Capt A K Khondoker",
      "Sqn Ldr Sultan Mahmud",
      "Sqn Ldr Mohiuddin Jahangir",
      "Gp Capt Asadullah",
    ],
    answer: 1,
  },
  {
    id: 480,
    question:
      "Who was the Acting President of Mujibnagar Govt during LW in 1971?",
    options: [
      "Tajuddin Ahmed",
      "Syed Nazrul Islam",
      "M A Mansur Ali",
      "None of the above",
    ],
    answer: 1,
  },
  {
    id: 481,
    question: "Attack on Kamalpur BOP on 31 Jul 1971 was carried out by:",
    options: ["1 E Bengal", "2 E Bengal", "10 E Bengal", "3 E Bengal"],
    answer: 0,
  },
  {
    id: 482,
    question: "Which unit led the 2nd Btl of Belonia Bulge?",
    options: ["1 E Bengal", "2 E Bengal", "10 E Bengal", "3 E Bengal"],
    answer: 2,
  },
  {
    id: 483,
    question: "Historical six Points were declared on",
    options: [
      "2nd March 1966",
      "23rd March 1966",
      "5th February 1966",
      "7th February 1966",
    ],
    answer: 2,
  },
  {
    id: 676,
    question: "Mines generally consist of:",
    options: [
      "Firing mechanism",
      "Detonator",
      "Booster charge",
      "All of the above",
    ],
    answer: 3,
  },
  {
    id: 677,
    question: "A minefield lane normally spans:",
    options: ["8", "50", "100", "20"],
    answer: 0,
  },
  {
    id: 678,
    question: "The burning rate of one foot safety fuse is:",
    options: ["15-20 sec", "20-27 sec", "27-33 sec", "None of the above"],
    answer: 2,
  },
  {
    id: 679,
    question: "The most common cause of accidental detonation is:",
    options: [
      "Fire",
      "Shock due to bursting of a HE projectile close to the charge",
      "Shock due to impact of solid projectile",
      "All of the above",
    ],
    answer: 3,
  },
  {
    id: 680,
    question: "Specific form used in Preliminary Demolition is:",
    options: ["BAFZ - 03", "BAFU - 06", "BAFU - 03", "None"],
    answer: 2,
  },
  {
    id: 681,
    question: "IEDs are constructed with _____ basic components'",
    options: ["Three", "Four", "Five", "Six"],
    answer: 2,
    reference: "ATP-03-1637 Para 0501",
  },
  {
    id: 682,
    question: "An aerial ropeway is constructed:",
    options: ["Across the gap", "Plain land", "Desert", "None of the above"],
    answer: 0,
    reference:
      "GSTP-1609, Basic Field Engineering Part-II, RE and Assault Pioneers-1960",
  },
  {
    id: 683,
    question: "While siting camp, latrine and incinerators must be placed",
    options: [
      "Downwind of the camp",
      "Upwind of the camp",
      "At slope",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 684,
    question: "Which one of the below is a type of indirect observation:",
    options: [
      "Visual observation - by line of sight",
      "RADAR",
      "Laser sighting and ranging",
      "None of the above",
    ],
    answer: 1,
    reference:
      "GSTP-1609, Basic Field Engineering Part-II, RE and Assault Pioneers-1960",
  },
  {
    id: 685,
    question: "A Bomb Disposal team consists of:",
    options: ["5 members", "6 members", "7 members", "8 members"],
    answer: 1,
    reference: "ATP 03-1643 Bomb Disposal Para 0807",
  },
  {
    id: 686,
    question: "Which one of below is not an explosive:",
    options: ["Amatol", "TNT", "RDX", "Methane (CH4)"],
    answer: 3,
    reference: "GSTP-1603",
  },
  {
    id: 687,
    question:
      "In the denial or scorching the earth op, all formations work to a common plan which is coordinated at the top by:",
    options: [
      "Formation commander",
      "Operation commander",
      "E in ",
      "None of the above",
    ],
    answer: 2,
    reference: "GSTP 1627 (EBIB), Para 1303",
  },
  {
    id: 688,
    question: "Examples of counter-mob functions of Engineers are:",
    options: [
      "Minefield laying",
      "Deception",
      "Construction of airfields",
      "Laying of bridges",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 777,
    question: "The burning rate of one foot safety fuse is:",
    options: ["15-20 sec", "20-27 sec", "27-33 sec", "None of the above"],
    answer: 2,
  },
  {
    id: 1,
    question: "The most common cause of accidental detonation is:",
    options: [
      "Fire",
      "Shock due to bursting of a HE projectile close to the charge",
      "Shock due to impact of solid projectile",
      "All of the above",
    ],
    answer: 3,
  },
  {
    id: 2,
    question: "Specific form used in Preliminary Demolition is:",
    options: ["BAFZ - 03", "BAFU - 06", "BAFU - 03", "None"],
    answer: 2,
    reference: "Tac - B' Précis (JCSC), Page 7-6, Para 27",
  },
  {
    id: 3,
    question: "IEDs are constructed with _____ basic components'",
    options: ["Three", "Four", "Five", "Six"],
    answer: 2,
    reference: "ATP-03-1637 Para 0501",
  },
  {
    id: 4,
    question: "An aerial ropeway is constructed:",
    options: ["Across the gap", "Plain land", "Desert", "None of the above"],
    answer: 0,
    reference:
      "GSTP-1609, Basic Field Engineering Part-II, RE and Assault Pioneers-1960",
  },
  {
    id: 767,
    question: "Location of 10 Fd Amb:",
    options: ["Joshore", "Rangpur", "Ramu", "Bogura"],
    answer: 1,
    reference: "ATP-08-4106, Page no 21-11, Para 2116 (Table) Ser-3",
  },
  {
    id: 768,
    question: "Manpower of MHT is:",
    options: ["21", "99", "50", "14"],
    answer: 3,
    reference: "ATP-08-4106, Page no 21-5, Para 2109 ()",
  },
  {
    id: 769,
    question: "War increment of a MDS is:",
    options: ["7", "8", "9", "10"],
    answer: 2,
    reference: "ATP-08-4106, Page no 21-7, Para 2112 (j)",
  },
  {
    id: 498,
    question:
      "Who was the journalist exposed human rights violations and scale of the Pakistan Army’s brutality in 1971?",
    options: [
      "Lawrence Lifschultz",
      "Siddique Salek",
      "Willem Van Schendal",
      "Naville Anthony Mascarenhas",
    ],
    answer: 3,
  },
  {
    id: 499,
    question: "When did Paradrop take place at Tangail during LW of BD?",
    options: [
      "11 December 1971",
      "14 December 1971",
      "21 November 1971",
      "25 November 1971",
    ],
    answer: 0,
  },
  {
    id: 770,
    question: "Mobile Surgical Team (MST)",
    options: ["12 hrs", "16 hrs", "20 hrs", "24 hrs"],
    answer: 3,
    reference: "ATP-08-4106, Page no 21-4, Para 2108 ()",
  },
  {
    id: 771,
    question: "Triage is done for:",
    options: [
      "Two purposes",
      "Four purposes",
      "Six purposes",
      "Eight purposes",
    ],
    answer: 0,
    reference: "ATP-08-4106, Page no 24-4, Para 2410",
  },
  {
    id: 772,
    question: "Location of the MDS is decided by the:",
    options: ["CO", "2IC", "ADMS", "All of the above"],
    answer: 2,
    reference: "Admin in the Field Vol-1 Sec 16 Para 5  (2)",
  },
  {
    id: 773,
    question:
      "A field ambulance is capable of functioning as a _________ bedded hospital",
    options: ["50", "25", "75", "100"],
    answer: 0,
  },
  {
    id: 774,
    question:
      "Through a jungle terrain, stretcher bearers can carry a casualty for a distance of:",
    options: [
      "100-200 yards",
      "300-400 yards",
      "200-500 yards",
      "400-600 yards",
    ],
    answer: 3,
  },
  {
    id: 775,
    question: "Disposal of dead during war is the responsibility of:",
    options: ["AG's Branch", "GS Branch", "QMG Branch", "MGO Branch"],
    answer: 0,
    reference: "GSTP-4603 (Med Service in the Field) Ch 4 Para12",
  },
  {
    id: 776,
    question: "Which one provides medical support during offensive ops & TRD?",
    options: ["MDS", "MHT", "Mobile ADS", "ADS"],
    answer: 2,
  },
  {
    id: 5,
    question:
      "After occupation of defense, the individual soldiers should be able to achieve a degree of personal protection in:",
    options: ["30 mins", "45 mins", "60 mins", "6 hrs"],
    answer: 0,
  },

  {
    id: 6,
    question: "The company HQ may also be co-located with",
    options: [
      "Sections",
      "Depth Platoons",
      "Forward Platoons",
      "One of the rifle Platoons",
    ],
    answer: 3,
  },
  {
    id: 7,
    question: "During the battle which one is the most reliable comm means?",
    options: ["Runners", "Line", "Wireless Set", "None of the above"],
    answer: 2,
  },
  {
    id: 30,
    question:
      "During battalion advance, the Mortar Fire Controller (MFC) will accompany",
    options: [
      "Vanguard Guard Commander",
      "Point Platoon Commander",
      "Point Section Commander",
      "Both a and b",
    ],
    answer: 3,
  },
  {
    id: 31,
    question:
      "In advance operation, the start point of a battalion is secured by?",
    options: [
      "Vanguard Guard Company",
      "Follow-up Company",
      "Headquarters Company",
      "None of the above",
    ],
    answer: 1,
  },

  {
    id: 32,
    question: "Headquarters moving on the centerline and",
    options: ["Commanders", "CO", "Adjutant", "Operations Officer"],
    answer: 0,
  },

  {
    id: 33,
    question:
      "In advance, which is essential for a greater need of good battalion procedure?",
    options: [
      "Maintenance of momentum",
      "Leadership",
      "Initiative",
      "Firepower",
    ],
    answer: 0,
  },
  {
    id: 84,
    question:
      "What is the length of the flash when fired in maximum charge by 82 mm mortar bomb ?",
    options: ["20-30 ft", "25-50 ft", "15-25 ft", "10-20 ft"],
    answer: 0,
  },
  {
    id: 34,
    question:
      "While marching on foot, in open country with good visibility the Van Guard Company may spread along the road/axis as long as:",
    options: [
      "450 to 600 metres",
      "800 to 900 metres",
      "1100 to 1400 metres",
      "1200 to 1400 metres",
    ],
    answer: 2,
  },

  {
    id: 35,
    question:
      "In attack, surprise can be achieved by attacking from an unexpected direction, at an unexpected time with:",
    options: ["Deception", "Aggressiveness", "Speed", "Initiative"],
    answer: 2,
  },
  {
    id: 594,
    question: "Which is not a method of movement?",
    options: ["Snake patrol", "Caterpillar", "Leapfrog", "Diamond"],
    answer: 3,
    reference: "ATP-01-0629, Armoured Troop in Battle 2017, Para 1606",
  },
  {
    id: 595,
    question: "Deep fording of MBT-2000 is of:",
    options: ["5 m", "1.4 m", "1.8 m", "None of the above"],
    answer: 2,
  },
  {
    id: 596,
    question: "Which ammo is not used in 125 mm main gun of MBT-2000?",
    options: ["HE", "HEAT", "APFSDS", "HESH"],
    answer: 3,
    reference: "ATP 01-0630, Armour Crew Hand Book 2017 (Bangla), Page 208",
  },
  {
    id: 597,
    question:
      "2nd echelon maintenance is required after ______________________ motor hours of engine operation",
    options: ["30-35", "50-60", "55-70", "None of the above"],
    answer: 1,
    reference: "ATP-01-0630, Armour Crew Hand Book 2017 (Bangla), Page 120",
  },
  {
    id: 598,
    question: "What are the aids of observation to identify enemy tanks?",
    options: ["The Eyes", "Binoculars", "Tell-Tale signs", "All of the above"],
    answer: 3,
    reference:
      "ATP-01-0629, Armoured Troop in Battle 2017, Para 0920, 0921, 0922",
  },
  {
    id: 599,
    question: "Call sign for armor-infantry cooperation:",
    options: ["96B", "99", "95", "81"],
    answer: 1,
  },
  {
    id: 328,
    question:
      "Persons entitled to travel by air are authorized to get the TA of the air passage fare actually paid plus:",
    options: ["10% of it", "15% of it", "20% of it", "None of the above"],
    answer: 2,
  },
  {
    id: 329,
    question:
      "Civilians paid from the defense budget are entitled to allotment of Army accommodation up to:",
    options: [
      "A maximum 40%",
      "A maximum 30%",
      "A maximum 20%",
      "A maximum 10%",
    ],
    answer: 0,
  },

  {
    id: 330,
    question:
      "All married officers holding commission in the Bangladesh Army shall be eligible for unfurnished married:",
    options: [
      "Rent-free accommodation",
      "Rent accommodation",
      "Rent 50% free accommodation",
      "None of the above",
    ],
    answer: 0,
  },
  {
    id: 570,
    question: "Total area of CHT is:",
    options: [
      "13,295 sq km",
      "10,595 sq km",
      "15,290 sq km",
      "None of the above",
    ],
    answer: 0,
    reference: "https://mochta.gov.bd",
  },
  {
    id: 571,
    question: "United People's Democratic Front (UPDF) was raised on:",
    options: ["10 Feb 1998", "26 Dec 1998", "26 Feb 1998", "10 Dec 1998"],
    answer: 1,
    reference: "SOP 24 Inf Div, Chapter-1, Para 15",
  },
  {
    id: 572,
    question:
      "The present Chairman of Parbatto Chattagram Ancholik Porishod is:",
    options: [
      `M"N" Larma`,
      "Shontu Larma",
      "Bir Bahadur Ushay Singh",
      "Ushaton Talukdar",
    ],
    answer: 1,
    reference: "Archive of HQ 24 Inf Div",
  },
  {
    id: 573,
    question: `JSS (M"N Larma) is organized by:`,
    options: [
      "Shontu Larma",
      "Topon Topi Barma",
      "Sudha Sindhu khisha",
      "Prosit bikas khisha",
    ],
    answer: 2,
    reference: "Archive of HQ 24 Inf Div",
  },
  {
    id: 806,
    question: "Which one is not one of the main principles of reconnaissance?",
    options: [
      "Maintenance of Aim",
      "Economy of Force",
      "Concentration",
      "Speed",
    ],
    answer: 3,
  },
  {
    id: 574,
    question: "In CHT, the number of Zilla Porishod is:",
    options: ["01", "02", "03", "04"],
    answer: 2,
    reference: "Archive of HQ 24 Inf Div",
  },
  {
    id: 841,
    question:
      "How many MRT (Mass Rapid Transit) lines will be there in Dhaka Metro Rail Project?",
    options: ["7", "6", "8", "5"],
    answer: 1,
  },
  {
    id: 803,
    question:
      "____ gives guidance on successive stages of repair work for each class of equipment",
    options: ["AR(I)", "BAO 14/75", "PRS", "SBAO 6/73"],
    answer: 2,
    reference: "EME Service in the Field Section 1, Para 0120",
  },
  {
    id: 804,
    question:
      "Which one is not a tactical requirement to layout a field workshop company?",
    options: ["Sy", "Dispersion", "Local defense", "Mutual support"],
    answer: 3,
    reference: "EME Service in the Field Section 9 Para 0910",
  },
  {
    id: 805,
    question: "Which statement is not correct?",
    options: [
      "Class IV equipment requires base overhaul",
      "Class VI equipment is beyond economic repair",
      "Class IIIC can be repaired to Class II standard",
      "Class IVC can be repaired to Class II standard",
    ],
    answer: 0,
    reference: "EOHB, Page: 20-3, Para: 2006",
  },
  {
    id: 807,
    question:
      "As a normal practice, FRRT should not undertake repairs, which warrant more than how many man-hours?",
    options: ["6-man hour", "12-man hour", "18-man hour", "24-man hour"],
    answer: 1,
    reference: "EME Service in the Field Section 13 Para 1304",
  },
  {
    id: 808,
    question:
      "A unit has 20 (Twenty)  vehicles. What is the minimum percentage of vehicles to be inspected during ATI?",
    options: ["100%", "75%", "60%", "None of the above"],
    answer: 1,
  },
  {
    id: 36,
    question: "At H-hour break cover and cross the SL",
    options: ["Nav party", "Sentries", "FUP mk party", "Ldg tps"],
    answer: 3,
  },
  {
    id: 809,
    question: "A vehicle is classified as Class 1B which means:",
    options: [
      "It has at least 50% of its assessed life remaining",
      "It has less than 50% its assessed life remaining",
      "It has 100% of its assessed life",
      "None of the above",
    ],
    answer: 1,
  },
  {
    id: 37,
    question:
      "One of the factors contributing to the success of night attack is:",
    options: [
      "Maintaining momentum",
      "Rapid reorg",
      "Impetus",
      "Simplicity in plan",
    ],
    answer: 3,
  },

  {
    id: 38,
    question:
      "In attack, arrangements for casualty needs to be made before troops move out of:",
    options: ["RV for FUP", "Assembly Area", "Concentration Area", "FUP"],
    answer: 3,
  },

  {
    id: 39,
    question:
      "What is the usual frontage of battalion in FUP during night attack:",
    options: ["600 m", "500 m", "700 m", "800 m"],
    answer: 0,
  },
  {
    id: 496,
    question:
      "Who was the first Bangladesh Woman to scale seven highest peaks in seven continents?",
    options: [
      "Wasfia Nazreen",
      "Nishat Majumder",
      "Salma Khatun",
      "Rizia Akter",
    ],
    answer: 0,
  },
  {
    id: 873,
    question: "Who discovered Uranus?",
    options: ["Copernicus", "Newton", "Herschel", "Galileo"],
    answer: 2,
  },
  {
    id: 40,
    question: "In attack op, FSP incl following types of fire support:",
    options: [
      "Deep penetration Fire",
      "Covering fire",
      "DF",
      "Speculative fire",
    ],
    answer: 1,
  },
  {
    id: 41,
    question:
      "Which of the following element is allotted in support to the battalion attack as Engineer support?",
    options: [
      "A field company",
      "A field platoon",
      "An engineer section",
      "Assault pioneer platoon",
    ],
    answer: 1,
  },
  {
    id: 42,
    question: `Flank of assault troops may be exposed to interference from enemy enfilade fire or spoiling attack, question: "_____ may be used as an integral means of flank protection by assault rifle company`,
    options: [
      "MG",
      "Indirect fire called by FOO/MFC accompanying the assault troops",
      "Composite Platoon with ATGM",
      "By laying of scatterable mines",
      "All of the above",
    ],
    answer: 0,
  },
  {
    id: 43,
    question:
      "A bypassed town or village must always be masked by reconnaissance troops with support of:",
    options: ["Infantry", "Armored", "Artillery", "Engineers"],
    answer: 2,
  },
  {
    id: 772,
    question: "Location of the Main Dressing Station(MDS) is decided by the:",
    options: ["CO", "2IC", "ADMS", "All of the above"],
    answer: 2,
  },
  {
    id: 773,
    question:
      "A field ambulance is capable of functioning as a ________ bedded hospital",
    options: [50, 25, 75, 100],
    answer: 0,
  },
  {
    id: 774,
    question:
      " Through a jungle terrain, stretcher bearers can carry a casualty for a distance of:",
    options: [" 100-200 yds", " 300-400 yds", " 200-500 yds", " 400-600 yds"],
    answer: 3,
  },

  {
    id: 775,
    question: " Disposal of dead during war is the responsibility of:",
    options: [" AG's Branch", " GS Branch", " QMG Branch", " MGO Branch"],
    answer: 0,
  },
  {
    id: 500,
    question:
      "How many persons along with Bangabandhu Sheikh Mujibur Rahman were charged in the Agartala Conspiracy Case?",
    options: ["35", "43", "23", "None of the above"],
    answer: 0,
  },

  {
    id: 501,
    question:
      "How many persons of Bangladesh Army received gallantry award because of their valiant contributions in LW?",
    options: ["100", "64", "46", "55"],
    answer: 1,
  },
  {
    id: 870,
    question: "Which is the largest rainforest in the world?",
    options: [
      "The Amazon",
      "Sundarbans",
      "Chittagong Hill Tracts",
      "Atlantic Forest",
    ],
    answer: 0,
  },
  {
    id: 776,
    question: " Which one provides medical support during offensive ops & TRD?",
    options: [" MDS", " MHT", " Mobile ADS", " ADS"],
    answer: 2,
  },

  {
    id: 834,
    question:
      "The first underwater tunnel of Bangladesh is being constructed in which River?",
    options: [
      "Surma River",
      "Buriganga River",
      "Karnaphuli River",
      "Shitlakshya River",
    ],
    answer: 2,
  },
  {
    id: 326,
    question:
      "If the deceased has left neither widow nor children nor parents then who will receive the dependent pension:",
    options: [
      "Brothers/Sisters in law",
      "Father/Mother in Law",
      "Brothers/Sisters",
      "All are above",
    ],
    answer: 2,
  },
  {
    id: 327,
    question:
      "Recoveries from wounds, injury, or disability pension shall require the special orders of:",
    options: ["The CAS", "The Government of Bangladesh", "The AG", "The CO"],
    answer: 1,
  },
  {
    id: 331,
    question:
      "What is the rate of ration allowance after LPR for every adult member (12 yrs and above children)?",
    options: [
      `Tk, question: 418.00 per man per month`,
      `Tk, question: 450.00 per man per month`,
      `Tk, question: 350.00 per man per month`,
      `Tk, question: 550.00 per man per month`,
    ],
    answer: 0,
  },
  {
    id: 835,
    question: "Two increasingly important ethical aspects of social media are:",
    options: [
      "Transparency and Privacy",
      "Identity and honesty",
      "Virtue and Virality",
      "Ratings and Traffic",
    ],
    answer: 1,
  },
];

let answers = [];
let data = [];
let userAns = [];

//data stores 50 questions, a set
// export { data, answers }; //stores answers of 50 questions

export default function Main() {
  const [trace, setTrace] = useState(0);
  const [check, setChecked] = useState(undefined);
  const [correct, setCorrect] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [code, setCode] = useState("1903179");
  const [quizMode, setQuizMode] = useState(0);

  /** next button event handler */
  function onNext() {
    if (trace < data.length) {
      /** increase the trace value by one using MoveNextAction */
      setTrace(trace + 1);
      console.log(check);
      if (check) userAns[trace] = check;
      /** insert a new result in the array.  */
      if (answers.length <= trace) {
        // dispatch(PushAnswer(check));
        console.log("bink"); //why?
      }
    } else {
      let corr = 0;
      let att = 0;
      for (let j = 0; j < userAns.length; j++) {
        if (answers[j] === userAns[j]) {
          corr++;
        }
        if (userAns[j] !== -1) {
          att++;
        }
      }
      setAttempt(att);
      setCorrect(corr);
      console.log(att + "  " + corr);
      setQuizMode(2);
    }

    /** reset the value of the checked variable */
    setChecked(undefined);
  }

  /** Prev button event handler */
  function onPrev() {
    if (trace > 0) {
      if (check) userAns[trace] = check;
      /** decrease the trace value by one using MovePrevQuestion */
      setTrace(trace - 1);
    }
  }

  function onChecked(check) {
    // console.log(check)
    setChecked(check);
  }

  function onSelect(i) {
    userAns[trace] = -1;
    onChecked(i);
    setChecked(i);
  }


  useEffect(() => {
    console.log(quizMode + " " + code);
  }, [quizMode, code]);

  function startQuiz() {
    if (quizMode === 0) {
      setQuizMode(1);
      setTimeout(() => {
        setQuizMode(2);
      }, 1801000); //30 minute 1000*60*30
    }

    let x = [
      parseInt(code[2]) % 3,
      parseInt(code[0]) % 3,
      parseInt(code[4]) % 3,
      parseInt(code[1]) % 3,
      parseInt(code[3]) % 3,
      parseInt(code[5]) % 3,
    ];
    console.log(x);

    answers = [];
    data = [];
    userAns = [];
    let il = 0;
    for (let index = 0; index < 150 && il < 50; index += x[il % 6] + 1) {
      il++;
      answers.push(questions[index + x[il % 6]].answer);
      data.push(questions[index + x[il % 6]]);
      userAns.push(-1);
    }
    console.log(answers);
    console.log(data);
  }

  if (quizMode === 0) {
    return (
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <ol>
          <li>You will be asked 50 questions one after another.</li>
          <li>10 points is awarded for the correct answer.</li>
          <li>
            Each question has four options. You can choose only one options.
          </li>
          <li>Time will be 30 minutes</li>
          <li>You can review and change answers before the quiz finish.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form id="form">
          <input
            className="userid"
            type="Code"
            placeholder="Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </form>

        <div className="start">
          <div className="btn" onClick={startQuiz}>
            Start Quiz
          </div>
        </div>
      </div>
    );
  } else if (quizMode === 1) {
    return (
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        {/* display questions */}

        <div className="questions">
          <h2 className="text-light">{data[trace]?.question}</h2>

          <ul key={data[trace]?.id}>
            {data[trace]?.options.map((q, i) => (
              <li key={i}>
                <input
                  type="radio"
                  value={false}
                  name="options"
                  id={`q${i}-option`}
                  onChange={() => onSelect(i)}
                />

                <label className="text-primary" htmlFor={`q${i}-option`}>
                  {q}
                </label>
                <div
                  className={`check ${userAns[trace] === i ? "checked" : ""}`}
                ></div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid">
          {trace > 0 ? (
            <button className="btn prev" onClick={onPrev}>
              Prev
            </button>
          ) : (
            <div></div>
          )}
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">{code}</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points : </span>
            <span className="bold">{50}</span>
          </div>
          <div className="flex">
            <span>Total Questions : </span>
            <span className="bold">{data.length || 0}</span>
          </div>
          <div className="flex">
            <span>Total Attempts : </span>
            <span className="bold">{attempt || 0}</span>
          </div>
          <div className="flex">
            <span>Total Earn Points : </span>
            <span className="bold">{correct || 0}</span>
          </div>
          <div className="flex">
            <span>Quiz Result</span>
            {/* <span
                 style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
                 className="bold"
               >
                 {flag ? "Passed" : "Failed"}
               </span> */}
          </div>
        </div>

        {/* <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div> */}

        {/* <div className="container">
            <ResultTable></ResultTable>
        </div> */}
      </div>
    );
  }
}
