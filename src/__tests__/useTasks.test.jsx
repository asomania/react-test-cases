import {expect, test, vi} from "vitest";
import {render, cleanup, renderHook} from "@testing-library/react";
import {useTasks} from "../hooks/useTasks";

/* Component olusturarak hook test etme onerilmez fazla
function getTasks(){
    const defaultTasks = [
        {id: "1", title: "Dokümantasyonu oku", completed: false},
        {id: "2", title: "Happy DOM ile render et", completed: true},
        {id: "3", title: "API isteğini mockla", completed: false},
    ]

    let result

    function TestComponent(){
        result = useTasks(defaultTasks)
        return null
    }

    render(<TestComponent />)
    return result
}


test("useTasks", () => {
    const result = getTasks()
    expect(result.tasks).toHaveLength(3)
    expect(result.completedCount).toBe(1)
})
*/


test('useTasks render hook test etme', async() => {
    const defaultTasks = [
        {id: "1", title: "Dokümantasyonu oku", completed: false},
        {id: "2", title: "Happy DOM ile render et", completed: true},
        {id: "3", title: "API isteğini mockla", completed: false},
    ]
    const {result} = renderHook(() => useTasks(defaultTasks))
    expect(result.current.tasks).toHaveLength(3)
    expect(result.current.completedCount).toBe(1)
})