import { render, cleanup } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { expect, test, afterEach } from "vitest";

// afterEach() - Her testten sonra temizleme yapar
afterEach(() => {
    cleanup()
})

test("TaskList", () => {
    const tasks = [
        { id: "1", title: "Dokümantasyonu oku", completed: false },
        { id: "2", title: "Happy DOM ile render et", completed: true },
        { id: "3", title: "API isteğini mockla", completed: false },
    ]
    const screen = render(<TaskList tasks={tasks} />)
    
    // toBeInTheDocument() - DOM'da var mı kontrol eder
    expect(screen.getByText("Dokümantasyonu oku")).toBeInTheDocument()
    expect(screen.getByText("Happy DOM ile render et")).toBeInTheDocument()
    expect(screen.getByText("API isteğini mockla")).toBeInTheDocument()
    // Checkbox testleri - getAllByRole array döndürür, her birini ayrı test etmeliyiz
    const checkboxes = screen.getAllByRole("checkbox")
    expect(checkboxes[0]).not.toBeChecked() // "Dokümantasyonu oku" - completed: false
    expect(checkboxes[1]).toBeChecked()     // "Happy DOM ile render et" - completed: true
    expect(checkboxes[2]).not.toBeChecked() // "API isteğini mockla" - completed: false
    
    // toBe() - Element'in textContent özelliğini karşılaştırır (primitive string)
    const element1 = screen.getByText("Dokümantasyonu oku")
    expect(element1.textContent).toBe("Dokümantasyonu oku")
    
    const element2 = screen.getByText("Happy DOM ile render et")
    expect(element2.textContent).toBe("Happy DOM ile render et")
})

