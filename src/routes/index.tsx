import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { projects } from "../data/projects";
import { HomePage } from "../pages/Home";
import { ProjectPage } from "../pages/Project";
import { Template } from "../pages/Template";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Template />}>
        <Route element={<HomePage />} index />
        <Route
          path="project/:id"
          element={<ProjectPage />}
          caseSensitive
          errorElement={<Navigate to={"/"} />}
          loader={(args) => {
            const id = args.params.id;
            const data = projects.find((e) => e.id == id);
            if (!data) throw new Error("Project not found!");
            return data;
          }}
        ></Route>
      </Route>
    </>
  )
);
