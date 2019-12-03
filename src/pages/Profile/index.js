import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(data) {}

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input
                    name="email"
                    type="email"
                    placeholder="Seu endereço de email"
                />
                <hr />
                <Input
                    type="password"
                    name="password"
                    placeholder="Sua senha atual"
                />
                <Input
                    type="password"
                    name="newPassword"
                    placeholder="Nova senha"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirmação de senha"
                />
                <button type="submit">Atualizar perfil</button>
            </Form>
            <button type="button">Sair</button>
        </Container>
    );
}
