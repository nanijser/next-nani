import Layout from "../layouts/Main";

export function renderLayout(props, state) {
    const { Component } = props;

    return (
        <Layout>
            <Component {...props}  />
        </Layout>
    );
}
