import React from "react";
import {
    Flex,
    Button,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Image,
    InputGroup,
    InputRightElement,
    RadioGroup,
    Stack,
    Radio,
} from "@chakra-ui/react";
import * as Yup from "yup";
import api from "axios";
import { Field, Form, Formik } from "formik";
import gengarGroup from "../../assets/gengarGroup.png";

export function Cadastro() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [value, setValue] = React.useState("");

    return (
        <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            h="100vh"
            bg="#585472"
        >
            <Flex
                borderRadius="5px"
                bg="#7D78A3"
                w="700px"
                h="400px"
                boxShadow="2px 1px 15px 3px rgba(0,0,0,0.32)"
                justifyContent="center"
                alignItems="center"
            >
                <Image src={gengarGroup} w="200px" marginRight="50px" />
                <Formik
                    initialValues={{
                        nome: "",
                        email: "",
                        sexo: "",
                        password: "",
                    }}
                    validationSchema={Yup.object().shape({
                        nome: Yup.string().min(6).required(),
                        email: Yup.string().email().required(),
                        sexo: Yup.string().required(),
                        password: Yup.string().min(6).required(),
                    })}
                    onSubmit={async (values) => {
                        console.log("valores", values);
                        await api.post(
                            "http://localhost:3333/registrar",
                            values
                        );
                    }}
                >
                    {(formik) => (
                        <Form>
                            <Field name="nome">
                                {({ field, form }) => (
                                    <FormControl>
                                        <FormLabel></FormLabel>
                                        <Input
                                            {...field}
                                            placeholder="nome"
                                            _placeholder={{
                                                color: "white",
                                                opacity: 1,
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {form.errors.name}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="email">
                                {({ field, form }) => (
                                    <FormControl>
                                        <FormLabel></FormLabel>
                                        <Input
                                            {...field}
                                            placeholder="email"
                                            _placeholder={{
                                                color: "white",
                                                opacity: 1,
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {form.errors.email}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="sexo">
                                {({ field, form }) => (
                                    <FormControl {...field}>
                                        <FormLabel></FormLabel>
                                        <RadioGroup
                                            onChange={setValue}
                                            value={value}
                                            name="sexo"
                                        >
                                            <Stack direction="row">
                                                <Radio value="Masculino">
                                                    Masculino
                                                </Radio>
                                                <Radio value="Feminino">
                                                    Feminino
                                                </Radio>
                                            </Stack>
                                        </RadioGroup>

                                        {/* <Input
                                            {...field}
                                            placeholder="sexo"
                                            _placeholder={{
                                                color: "white",
                                                opacity: 1,
                                            }}
                                        /> */}
                                        <FormErrorMessage>
                                            {form.errors.sexo}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="password">
                                {({ field, form }) => (
                                    <FormControl>
                                        <FormLabel></FormLabel>
                                        <InputGroup>
                                            <Input
                                                {...field}
                                                placeholder="password"
                                                _placeholder={{
                                                    color: "white",
                                                    opacity: 1,
                                                }}
                                                type={
                                                    show ? "text" : "password"
                                                }
                                            />
                                            <InputRightElement width="4.5rem">
                                                <Button
                                                    size="sm"
                                                    onClick={handleClick}
                                                >
                                                    {show ? "Hide" : "Show"}
                                                </Button>
                                            </InputRightElement>
                                        </InputGroup>
                                        <FormErrorMessage>
                                            {form.errors.password}
                                        </FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Button
                                marginTop="10px"
                                marginLeft="70px"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Flex>
        </Flex>
    );
}

{
    /* <RadioGroup
    onChange={setValue}
    value={value}
>
    <Stack direction="row" {...field}>
        <Radio value="Masculino">
            Masculino
        </Radio>
        <Radio value="Feminino">
            Feminino
        </Radio>
    </Stack>
</RadioGroup> */
}
