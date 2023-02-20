const LoginPageData = {
  subtitle: "3초 만에 만나는 대학친구",
  inputArr: [
    { placeholder: "아이디를 입력해줘요", type: "id" },
    { placeholder: "비밀번호를 입력해줘요", type: "password" },
  ],
  subBtn: { Text: "처음 왔어요", handler: null },
  mainBtn: { Text: "문의하기", handler: null },
};



const EmailPageData = {
  subtitle: "🤗 환영합니다 🤗",
  inputArr: [
    { placeholder: "학교 이메일을 적어주세요", type: "email" },
  ],
  subBtn: { Text: "문의할래요", handler: null },
  mainBtn: { Text: "인증번호 받을래요", handler: null },
};

const CheckPageData = {
  subtitle: "🧐 보냈어요! 🧐",
  inputArr: [
    { placeholder: "인증번호를 적어주세요", type: "password" },
  ],
  subBtn: { Text: "문의할래요", handler: null },
  mainBtn: { Text: "인증번호 적었어요", handler: null },
};

const IDPWPageData = {
  subtitle: "😄 이제 다 했어요 😄",
  inputArr: [
    { placeholder: "아이디 입력해줘요", type: "id" },
    { placeholder: "비밀번호 입력해줘요", type: "password" },
    { placeholder: "비밀번호 한번 확인할게요", type: "password" },
  ],
  subBtn: { Text: "문의할래요", handler: null },
  mainBtn: { Text: "다 적었어요", handler: null },
};

const NickNamePageData = {
  subtitle: "🤫 채팅에 표시돼요 🤫",
  inputArr: [
    { placeholder: "닉네임을 입력해줘요", type: "string" },
  ],
  subBtn: { Text: "문의할래요", handler: null },
  mainBtn: { Text: "이제 입장할래요", handler: null },
}


export {LoginPageData, EmailPageData, CheckPageData, IDPWPageData, NickNamePageData};