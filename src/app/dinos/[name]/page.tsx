export default async function Dino({params}: {params: {name: string}}) {
    const {name} = await params;
    return <h1>A dino named {name}</h1>;
}