const firebaseConfig = {
    apiKey: "AIzaSyCZUloZmFHEPl31gA3Oc2s2JbrlPwIBHHg",
    authDomain: "project-kj-64dfc.firebaseapp.com",
    databaseURL: "https://project-kj-64dfc-default-rtdb.firebaseio.com",
    projectId: "project-kj-64dfc",
    storageBucket: "project-kj-64dfc.appspot.com",
    messagingSenderId: "502629208156",
    appId: "1:502629208156:web:5f60881f38098e24541699",
    measurementId: "G-H7T1MQX7YQ"
  };
  
  // 파이어베이스 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

    // 파이어베이스 실시간 데이터베이스 생성
    const database = firebase.database();

    // 데이터 저장 실습
    function writeUserData(userId,email,nick) {
        database.ref("users/"+userId).set({
          email: email,
          nick : nick
        });
    }
      
    // 데이터 읽기 실습
    // 1.전체 조회된 결과 출력
    // -테이블 태그 or 목록 태그를 활용해서 출력

    // 2.특정 사용자 조회
    //  -id값 입력받은 후 해당 사용자의 email,nick 출력
    function readUserOneData(){
        database.ref("users/").on('value',(snapshot)=>{})

    }
    // 3.id값과 email,nick값이 일치한지 판별
    function readUserData(){
        database.ref("users/").on('value',(snapshot)=>{
            // 실시간 데이터 베이스 값 접근
            console.log(snapshot.val());

            let data = snapshot.val();
            let keys = Object.keys(data);

            console.log(Object.keys(data));
            console.log(data["jin"]);
            console.log(data[keys[0]]);

            const result = document.getElementById("result");

            //데이터베이스 웹페이지 출력
    //         result.innerText = `${data[keys[0]].email}/${data[keys[0]].nick}`;

    //         let table="<table border='1'><tr><th>아이디</th><th>이메일</th><th>닉네임</th></tr>"
    //         for(i=0;i<=data.length;i++){
    //             table+="<tr><td>" + data[keys[i]].email+"</td><td>"+data[keys[i]].email+"</td><td>"+data[keys[i]].email+"</td></tr>";
    //         }
    //         table += "</table>"
    //         document.result.innerHtml(table)
            
    })
    }

////////////////////////////////////////////////////////////////////////////////////

const mem=document.form.mem;
const readbtn=document.getElementById("readbtn");

readbtn.addEventListener("click",()=>{
    readUserData();
})
    mem.addEventListener("click",(Event)=>{
        Event.preventDefault();
        let id = document.form.id.value;
        let email = document.form.email.value;
        let nick = document.form.nick.value;
        console.log(
            "아이디:"+id
            ,"이메일:"+email
            ,"닉네임:"+nick
        );
        
        writeUserData(id,email,nick);
    })
