import File from "./file";
import _Form from "./form";
import useForm from "./useForm";

const MyForm = _Form;
MyForm.prototype.File = File;
MyForm.prototype.useForm = useForm;

export default MyForm
export { useForm, File }