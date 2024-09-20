import Label from "@/components/atoms/Label/Label";
import Input from "@/components/atoms/Input/Input";
import styles from "./FormGroup.module.css";
function FormGroup({ id, type, placeholder, label, onChange }) {
    return (
        <div className={styles.formGroup}>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default FormGroup;
