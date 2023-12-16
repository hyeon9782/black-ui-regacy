import { useState } from "react";

import { useIsoMorphicEffect } from "./useIsoMorphicEffect";
import { useServerHandoffComplete } from "./useServerHandoffComplete";

// 이거는 시그니처 인가요? ㅎㅎ 코드 참고만 하고 새로운 디자인 시스템으로 만들어볼게용
const idPrefix = "devote";

let id = 0;
function generateId() {
  return ++id;
}

export const useId = () => {
  const ready = useServerHandoffComplete();
  const [id, setId] = useState(ready ? generateId : null);

  useIsoMorphicEffect(() => {
    if (id === null) setId(generateId());
  }, [id]);

  return id != null ? `${idPrefix}` + id : undefined;
};
