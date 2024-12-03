import { buttonRecipe } from "./recipes/ButtonRecipe";
import { iconButtonRecipe } from "./recipes/IconButtonRecipe";
import { iconRecipe } from "./recipes/IconRecipe";
import { inputGroupRecipe } from "./recipes/inputGroupRecipe";
import { inputRecipe } from "./recipes/InputRecipe";
import { nativeSelectRecipe } from "./recipes/NativeSelectRecipe";
import { textAreaRecipe } from "./recipes/TextAreaRecipe";
import { TextRecipe } from "./recipes/TextRecipe";

export const recipes = {
  button: buttonRecipe,
  icon: iconRecipe,
  iconButton: iconButtonRecipe,
  input: inputRecipe,
  inputGroup: inputGroupRecipe,
  nativeSelect: nativeSelectRecipe,
  text: TextRecipe,
  textArea: textAreaRecipe
};