import LoginForm from "@/components/organisms/LoginForm/LoginForm";
function LoginTemplate({
    handleSubmit,
    error
}) {
    return (
        <>
            <LoginForm
                handleSubmit={handleSubmit}
                error={error}
            />
        </>
    );
}
export default LoginTemplate;