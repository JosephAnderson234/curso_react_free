import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    example: string
    exampleRequired: string
}

export default function ReactHookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    //console.log(watch("example"))

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 bg-[var(--color-background)]"
        >
            <input
                defaultValue="test"
                {...register("example", {
                    required: true,
                    maxLength: 20,
                    minLength: 3,
                    pattern: /^[A-Za-z]+$/i, // Only letters
                })}
                className="border border-[var(--color-border)] rounded px-2 py-1 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] mb-2"
            />
            {errors.example && (
                <span className="text-[var(--color-error)] text-sm mb-2 block">
                    {errors.example.type === "required" && "This field is required"}
                    {errors.example.type === "maxLength" && "Max length is 20"}
                    {errors.example.type === "minLength" && "Min length is 3"}
                    {errors.example.type === "pattern" && "Only letters are allowed"}
                </span>
            )}
            <input
                {...register("exampleRequired", { required: true })}
                className="border border-[var(--color-border)] rounded px-2 py-1 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] mb-2"
            />
            {errors.exampleRequired && (
                <span className="text-[var(--color-error)] text-sm mb-2 block">
                    This field is required
                </span>
            )}
            <input
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded cursor-pointer"
            />
        </form>
    )
}