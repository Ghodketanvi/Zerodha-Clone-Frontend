import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => null);

      if (res.ok) {
        alert("Signup successful");
        setForm({ username: "", password: "" });
      } else {
        alert(data?.error || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  // Simple login button handler: go straight to dashboard
  const goToDashboard = () => {
    window.location.href = "http://localhost:3001/";
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
  

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={form.username}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
              required
            />
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
              required
            />
          </label>
        </div>

        {/* Sign Up button (blue) */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "8px 16px",
            backgroundColor: "#0f8ff8",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginRight: "8px",
          }}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Login button (also blue) */}
        <button
          type="button"
          onClick={goToDashboard}
          style={{
            padding: "8px 16px",
            backgroundColor: "#0f8ff8", // blue
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Signup;