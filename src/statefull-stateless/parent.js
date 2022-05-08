import React, { useState, useRef } from "react";
import Child from "./child";

const Parent = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState({ name: "", usia: "", jenis_kelamin: "" });
    const [name, setName] = useState("");
    const inputRef = useRef(null);

    let countBiasa = 0;

    const tambah = () => {
        setCount(count + 1);
        countBiasa = countBiasa + 1;
    };

    const kurang = () => {
        setCount(count - 1);
        countBiasa = countBiasa - 1;
    };

    const addUser = () => {
        setUser({ name: "Doni", usia: 30, jenis_kelamin: "Pria" });
    };

    const gantiNama = (event) => {
        setName(event.target.value);
        console.log(name)
    };

    const consoleRef = () => {
        console.log(inputRef.current.value);
    };

    return (
        <>
            <div>parent</div>
            <button onClick={tambah}>Tambah</button>
            <Child nilai={count} nilaiBiasa={countBiasa} />
            <button onClick={kurang}>Kurang</button>
            <br />
            <br />
            <button onClick={addUser}>Add user</button>
            <p>{user.name}</p>
            <p>{user.usia}</p>
            <p>{user.jenis_kelamin}</p>
            <br />
            <br />
            Controlled input
            <input onChange={(event) => gantiNama(event)} value={name} />
            <br />
            Uncontrolled input
            <input ref={inputRef} />
            <button onClick={consoleRef}>Lihat ref</button>
        </>
    );
};

export default Parent;
