export default function Header(){
    return (
        <header
            style={{
                borderBottom: '5px solid #e20f0f',
                padding: 5,
                marginBottom : '1rem',
            }}
            className="bg-gray-800 text-white"
        >
            <p className="p-4 text-xl">En-tête</p>
        </header>
    );
}