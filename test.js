function getUser(id) {
  return {
    id,
    email: `user${id}@test.com`,
  };
}

// test("테스트 설명", () => {
//   expect("검증 대상").toBe("기대 결과");
// });

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("return a user object", () => {
  expect(getUser(1)).toEqual({
    id: 1,
    email: `user1@test.com`,
  });
});

// 자주 사용되는 Matcher
// toBeTruthy(), toBeFalsy()
// toHaveLength(), toContain()

test("array", () => {
  const colors = ["Red", "Yellow", "Blue"];
  expect(colors).toHaveLength(3);
  expect(colors).toContain("Yellow");
  expect(colors).not.toContain("Green");
});

// 정규식 기반의 테스트가 필요할 떄가 있는데 toMatch() 함수