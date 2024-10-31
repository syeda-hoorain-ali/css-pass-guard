"use client"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import Logo from "@/components/logo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyIcon, EditIcon, EyeIcon, EyeOffIcon, PlusIcon, Trash2Icon } from "lucide-react";
// import { v4 as uuidv4 } from "uuid"
import styles from "@/styles/home.module.css"
import { cn } from "@/lib/utils";

interface Password {
  id: string;
  site: string;
  username: string;
  password: string;
}

const HomePage = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordArray, setPasswordArray] = useState<Password[]>([]);
  const [form, setForm] = useState<Password>({
    site: "",
    username: "",
    password: "",
    id: "",
  })

  useEffect(() => {
    const myPasswords = localStorage.getItem("myPasswords");
    if (myPasswords) {
      setPasswordArray(JSON.parse(myPasswords))
    }
  }, [])




  const savePassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let newPasswords = []
    // const newPasswords = [...passwordArray, { ...form, id: uuidv4() }]

    if (form.site.trim().length < 3) {
      toast.error("Enter a valid site");
      return;
    }

    if (form.username.trim().length < 3) {
      toast.error("Enter a valid username");
      return;
    }

    if (form.password.trim().length < 3) {
      toast.error("Enter a valid password");
      return;
    }

    if (form.id !== "") {
      newPasswords = passwordArray.map(item => {
        if (item.id === form.id) return form
        return item
      })
    } else {
      newPasswords = [...passwordArray, { ...form, id: String(Math.random() * 10) }]
    }

    setPasswordArray(newPasswords);
    localStorage.setItem("myPasswords", JSON.stringify(newPasswords));
    toast.success("Password save successfully")
    setForm({ site: "", username: "", password: "", id: "" })
  }

  const deletePassword = (id: string) => {
    const newPasswords = passwordArray.filter(item => item.id !== id);
    setPasswordArray(newPasswords)
    localStorage.setItem("myPasswords", JSON.stringify(newPasswords))
    toast.success("Password delete successfully!")
  }

  const editPassword = (item: Password) => {
    setForm(item)
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value })
  }

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text).then(() => toast.info("Copied to clipboard"))
  }


  return (<>
    <div className={styles.myContainer}>

      <h1><Logo /></h1>
      <p>Your own password manager</p>

      <form onSubmit={savePassword} className={styles.form}>
        <input
          value={form.site}
          onChange={handleInput}
          placeholder="Enter Website URL"
          className={styles.input}
          type="url"
          name="site"
          id="site"
          required
        />

        <div className={styles.inputWrapper}>
          <input
            value={form.username}
            onChange={handleInput}
            placeholder="Enter Username"
            className={styles.input}
            type="text"
            name="username"
            id="username"
            required
          />

          <div className={styles.password}>
            <input
              value={form.password}
              onChange={handleInput}
              placeholder="Enter Password"
              className={styles.input}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              required
            />

            <span className={styles.passwordToggle} onClick={() => setShowPassword(!showPassword)}>
              {showPassword ?
                <span className={cn(styles.icon, styles.eyeOff)}><EyeOffIcon size={20} /> </span> :
                <span className={cn(styles.icon, styles.eye)}><EyeIcon size={20} /> </span>}
            </span>
          </div>
        </div>

        <button type="submit"
          className={styles.submitButton}>
          <PlusIcon /> Add Password
        </button>
      </form>
    </div>

    <div className={styles.passwordsContainer}>
      <h2>Your passwords</h2>
      {passwordArray.length === 0 && <p>No Passwords to show</p>}

      {passwordArray.length !== 0 &&
        <div className={styles.passwords}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Site</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <div>
                        <a href={item.site} target="_blank">{item.site}</a>
                        <div onClick={() => copyText(item.site)} className={cn(styles.icon, styles.copy)}>
                          <CopyIcon size={15} />
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <span>{item.username}</span>
                        <div onClick={() => copyText(item.username)} className={cn(styles.icon, styles.copy)}>
                          <CopyIcon size={15} />
                        </div>
                      </div>
                    </td>

                    <td>
                      <div>
                        <span>{item.password}</span>
                        <div onClick={() => copyText(item.password)} className={cn(styles.icon, styles.copy)}>
                          <CopyIcon size={15} />
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className={styles.actions}>
                        <span onClick={() => editPassword(item)} className={cn(styles.icon, styles.edit)}>
                          <EditIcon size={18} />
                        </span>

                        <span onClick={() => deletePassword(item.id)} className={cn(styles.icon, styles.delete)}>
                          <Trash2Icon size={18} stroke="#dc2626" />
                        </span>
                      </div>
                    </td>
                  </tr>)
              })}


            </tbody>
          </table>
        </div>
      }
    </div>
  </>)
}

export default HomePage