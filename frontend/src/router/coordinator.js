export const goToStartPage = (navigate) => {
  navigate("/")
}

export const goToAboutPage = (navigate) => {
  navigate("/about")
}

export const goToLoginPage = (navigate) => {
  navigate("/login")
}

export const goToRegisterPage = (navigate) => {
  navigate("/register")
}

export const goToPeoplesPage = (navigate) => {
  navigate("/peoples")
}

export const goToCatsPage = (navigate) => {
  navigate("/cats")
}

export const goToDogsPage = (navigate) => {
  navigate("/dogs")
}

export const goToUsersPage = (navigate) => {
  navigate("/users")
}

export const goToProfilePage = (navigate) => {
  navigate("/profile")
}

export const goToClientPage = (navigate) => {
  navigate("/client")
}

export const goToCreateClientPage = (navigate) => {
  navigate("/client/create")
}

export const goToEditClientPage = (navigate, id) => {
  navigate(`/client/edit/${id}`)
}