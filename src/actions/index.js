import { SAVE_COMMENT } from "actions/types";

export function saveComment(payload) {
  return {
    type: SAVE_COMMENT,
    payload,
  };
}
