var theater = theaterJS({ erase: 450})

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'tell1') {
      document.body.classList.add('dark')
    } else {
     document.body.classList.add('dark')
    }
  })

theater
  .addActor('tell1', { speed: 0.8,accuracy: 1 })
    .addScene('tell1:울드렌 소프는 리프의 왕자이자 여왕 마라 소프의 동생이다.', 850)
    .addScene('tell1:황금기 시절  울드렌 소프는 암리타 프로젝트의 일원으로 엑소더스 그린의 선원이였다.', 850)
    .addScene('tell1:본명은 울드윈이였는데 엑소더스 그림이 소행성대를 지나가던 중 어둠을 맞이하게 되고', 850)
    .addScene('tell1:여행자의 반격에 의해 생성된 블랙홀에 엑소더스 그린의 탑승객 모두와 함께 빨려 들어간다.', 850)
    .addScene('tell1:블랙홀에서 깨어난 울드윈은 이름을 울드렌으로 바꾸었다.', 850)
    .addScene('tell1:신정론 전쟁 이후 마라가 여왕이 되었고 마라를 따라 지류를 떠나 다시 태양계로 돌아왔다.', 850)
    .addScene('tell1:소행성대의 험한 환경, 몰락자, 그리고 탈주자들 같은 위기에 처하면서도', 850)
    .addScene('tell1:마라와 각성자들의 왕국인 리프를 건립하는데 성공한 울드렌은 만인들한테 사랑 받는 인물이 되었다.', 850)
    .addScene('tell1:이후 여러 공을 세워서 각성자들한테 큰 존경을 받고 있었으나 울드렌은 이 존경이 자신의 공이 아니라', 850)
    .addScene('tell1:자신이 마라의 혈육이라는 점에서 나오는 걸 알고 있었다.', 850)
    .addScene('tell1:자신의 진정한 능력을 보여주기 위해 큰 업적을 세워야 했고 이에 울드렌은 자신의 친구 졸리온 틸과 모험을 떠난다.', 850)
    .addScene('tell1:울드렌과 졸리온은 전설로만 여겨지던 검은 정원을 찾아 화성을 찾았고 수 많은 벡스와 기갑단 전사들을 해치우며', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)
    .addScene('tell1:', 850)