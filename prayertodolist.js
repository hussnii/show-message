const username=window.prompt("ASSEALMUALEYKUM WEREHMETULUAHI WEBEREKATUHU PLEASE ENTER YOUR NAME:")
alert(`welcome to this simple prayer to do list website ${username}!`)
let fardselatTasks = [
  { id: 1, name: "Fajr", completed: false },
  { id: 2, name: "Dhuhr", completed: false },
  { id: 3, name: "Asr", completed: false },
  { id: 4, name: "Magrib", completed: false },
  { id: 5, name: "Isha", completed: false }
];
let sunnahselatTasks = [
  { id: 1, name: "Fajr sunnah", completed: false },
  { id: 2, name: "Dhuhr sunnah", completed: false },
  { id: 3, name: "Asr sunnah", completed: false },
  { id: 4, name: "Maghrib sunnah", completed: false },
  { id: 5, name: "Isha sunnah", completed: false }
];let zikirTasks = [
  { id: 1, name: "morning zikir", completed: false },
  { id: 2, name: "evening zikir ", completed: false },
  { id: 3, name: "after praying zikir", completed: false },
  { id: 4, name: "special zikir", completed: false },
  { id: 5, name: "Isha", completed: false }
];let ramadanTasks = [
  { id: 1, name: "Fasting", completed: false },
  { id: 2, name: "read qur'an today", completed: false },
  { id: 3, name: "giving charity", completed: false },
  { id: 4, name: "terawih prayer", completed: false },
  { id: 5, name: "dua", completed: false }
];const fajrtask=fardselatTasks[0];
const dhurtask=fardselatTasks[1];
const asrtask=fardselatTasks[2];
const maghribtask=fardselatTasks[3];
const ishatask=fardselatTasks[4];
if(fajrtask.completed==true)
  {
  console.log(`✅ The task "${fajrtask.name}" is completed. Alhamdulillah!`);
} else {
  console.log(`🕋 The task "${fajrtask.name}" is not completed yet. Try to perform it soon, Insha'Allah!`);
}
if(dhurtask.completed==true)
  {
  console.log(`✅ The task "${dhurtask.name}" is completed. Alhamdulillah!`);
} else {
  console.log(`🕋 The task "${dhurtask.name}" is not completed yet. Try to perform it soon, Insha'Allah!`);
}
if(asrtask.completed==true)
  {
  console.log(`✅ The task "${asrtask.name}" is completed. Alhamdulillah!`);
} else {
  console.log(`🕋 The task "${asrtask.name}" is not completed yet. Try to perform it soon, Insha'Allah!`);
}
if(maghribtask.completed==true)
  {
  console.log(`✅ The task "${maghribtask.name}" is completed. Alhamdulillah!`);
} else {
  console.log(`🕋 The task "${maghribtask.name}" is not completed yet. Try to perform it soon, Insha'Allah!`);
}
if(ishatask.completed==true)
  {
  console.log(`✅ The task "${ishatask.name}" is completed. Alhamdulillah!`);
} else {
  console.log(`🕋 The task "${ishatask.name}" is not completed yet. Try to perform it soon, Insha'Allah!`);
}


